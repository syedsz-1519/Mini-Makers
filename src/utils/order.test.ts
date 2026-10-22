import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeWhatsAppPhone,
  calculateOrderEstimate,
  buildProductWhatsAppUrl,
  buildCustomInquiryWhatsAppUrl,
  filterProducts,
  validateCustomOrder,
} from './order';
import { PRODUCTS } from '../data/catalog';

test('sanitizeWhatsAppPhone formats Pakistani 03xx numbers to 923xx', () => {
  assert.equal(sanitizeWhatsAppPhone('0341-4655335'), '923414655335');
  assert.equal(sanitizeWhatsAppPhone('0300 1234567'), '923001234567');
  assert.equal(sanitizeWhatsAppPhone('+92 341 4655335'), '923414655335');
});

test('calculateOrderEstimate computes Lahore & Pattoki shipping correctly', () => {
  const mockItem = {
    product: PRODUCTS[0],
    quantity: 2,
  };

  const lahoreEstimate = calculateOrderEstimate([mockItem], 'Lahore');
  assert.equal(lahoreEstimate.isLahoreOrPattoki, true);
  assert.equal(lahoreEstimate.itemCount, 2);
  assert.equal(lahoreEstimate.shippingPKR, 250);
  assert.equal(lahoreEstimate.subtotalPKR, (PRODUCTS[0].estimatedPricePKR || 2500) * 2);
  assert.equal(lahoreEstimate.totalPKR, lahoreEstimate.subtotalPKR + 250);

  const karachiEstimate = calculateOrderEstimate([mockItem], 'Karachi');
  assert.equal(karachiEstimate.isLahoreOrPattoki, false);
  assert.equal(karachiEstimate.shippingPKR, 450);
});

test('buildProductWhatsAppUrl encodes product name and custom options', () => {
  const url = buildProductWhatsAppUrl(PRODUCTS[0], {
    occasion: 'Birthday',
    color: 'Blush Rose',
    ribbon: 'Mauve Satin',
    note: 'Happy Birthday Fatima!',
  });

  assert.match(url, /https:\/\/wa\.me\/923414655335\?text=/);
  assert.ok(url.includes(encodeURIComponent('Ribbon Flower Bouquet')));
  assert.ok(url.includes(encodeURIComponent('Happy Birthday Fatima!')));
});

test('filterProducts filters by category and search query correctly', () => {
  const bouquets = filterProducts(PRODUCTS, { category: 'bouquets' });
  assert.ok(bouquets.length > 0);
  assert.ok(bouquets.every((p) => p.category === 'bouquets'));

  const searchResults = filterProducts(PRODUCTS, { searchQuery: 'Doodh Pilai' });
  assert.ok(searchResults.length >= 1);
  assert.equal(searchResults[0].id, 'doodh-pilai-glass');
});

test('validateCustomOrder catches empty or malformed inputs', () => {
  const invalid = validateCustomOrder({
    fullName: '',
    whatsappNumber: '123',
    city: '',
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.whatsappNumber);
  assert.ok(invalid.errors.city);

  const valid = validateCustomOrder({
    fullName: 'Zainab Khan',
    whatsappNumber: '0341-4655335',
    city: 'Lahore',
    occasion: 'Nikkah',
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
