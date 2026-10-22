import React, { useState, useRef } from 'react';
import {
  MessageCircle,
  Sparkles,
  ChevronRight,
  Send,
  Upload,
  CheckCircle2,
  Heart,
  Palette,
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  Check,
  Edit2,
  Image as ImageIcon,
  X,
  AlertCircle,
  Gift,
} from 'lucide-react';
import { BRAND } from '../data/catalog';
import {
  CustomOrderWizardData,
  validateWizardStep,
  buildWizardWhatsAppUrl,
} from '../utils/order';
import { IllustratedHeading } from '../components/IllustratedHeading';

interface CustomOrderScreenProps {
  onNavigate: (screen: string) => void;
}

const OCCASIONS = [
  'Birthday',
  'Wedding',
  'Mehndi',
  'Nikkah',
  'Eid',
  "Mother's Day",
  'Baby Shower',
  'Other',
];

const PRODUCT_TYPES = [
  'Bouquet',
  'Wedding Product',
  'Gift Box',
  'Frame',
  'Basket',
  'Accessory',
  'Other',
];

const COLOR_THEMES = [
  'Blush Rose & Cream',
  'Velvet Red & Gold',
  'Lavender & Soft Lilac',
  'Pastel Blue & Peach',
  'Emerald Green & Champagne',
  'Maroon & Antique Gota',
  'Custom Dress Match',
];

const POPULAR_CITIES = [
  'Lahore',
  'Pattoki',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Sialkot',
];

const BUDGET_OPTIONS = [
  'Under Rs. 2,000',
  'Rs. 2,000 - Rs. 4,000',
  'Rs. 4,000 - Rs. 7,000',
  'Rs. 7,000+ Luxury Set',
  'Flexible / Open',
];

const STEP_TITLES = [
  'Your Details',
  'Occasion and Product',
  'Customization',
  'Delivery',
  'Review and Send',
];

export const CustomOrderScreen: React.FC<CustomOrderScreenProps> = ({
  onNavigate,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<CustomOrderWizardData>({
    fullName: '',
    whatsappNumber: '',
    city: 'Lahore',
    occasion: 'Birthday',
    occasionOther: '',
    productType: 'Bouquet',
    productTypeOther: '',
    colorTheme: 'Blush Rose & Cream',
    nameOrMessage: '',
    referenceImageName: '',
    referenceImageDataUrl: '',
    extraDetails: '',
    deliveryDate: '',
    deliveryAddress: '',
    budgetRange: 'Rs. 2,000 - Rs. 4,000',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formTopRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 5;
  const progressPercent = (currentStep / totalSteps) * 100;

  const scrollToFormTop = () => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = (field: keyof CustomOrderWizardData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          referenceImageName: file.name,
          referenceImageDataUrl: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      referenceImageName: '',
      referenceImageDataUrl: '',
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNext = () => {
    const validation = validateWizardStep(currentStep, formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setErrors({});
      setCurrentStep((prev) => prev - 1);
      scrollToFormTop();
    }
  };

  const handleJumpToStep = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      setErrors({});
      setCurrentStep(stepNumber);
      scrollToFormTop();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = buildWizardWhatsAppUrl(formData);
    setIsSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const getRemainingStepsText = (step: number) => {
    const remaining = totalSteps - step;
    if (remaining === 0) return 'Last step! Almost done';
    if (remaining === 1) return '1 step left';
    return `${remaining} steps left`;
  };

  return (
    <div className="w-full pb-10 sm:pb-16 bg-[#FFF8F3] text-[#3A2A30]">
      {/* Header Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 border-b border-[#F4B6C6]/40 bg-[#FBE4EA]/50">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            className="flex items-center justify-center gap-1.5 text-xs text-[#3A2A30]/70 mb-3"
            aria-label="Breadcrumb"
          >
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#B03A63] transition-colors focus-visible:ring-2 focus-visible:ring-[#B03A63] rounded px-1"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="font-semibold text-[#B03A63]">Custom Order Studio</span>
          </nav>

          <IllustratedHeading
            as="h1"
            eyebrow="made with love"
            icon="custom-order"
            titleBefore="Custom Order"
            highlightWord="Request"
            subtitle="Have a Pinterest reference, dress color swatch, or bespoke celebration idea? Our Lahore artisan studio crafts every piece to perfection."
            highlightStyle="marker"
          />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div ref={formTopRef} className="scroll-mt-8">
          {/* Progress Indicator Container */}
          <div className="mb-8 bg-white p-5 sm:p-7 rounded-3xl border border-[#F4B6C6]/60 shadow-xs">
            {/* Desktop & Tablet Stepper (>=600px) */}
            <div className="hidden sm:block">
              <div className="relative flex items-center justify-between">
                {/* Connecting Line Background */}
                <div
                  className="absolute top-5 left-8 right-8 h-1 bg-[#FBE4EA] -z-0"
                  aria-hidden="true"
                >
                  <div
                    className="h-full bg-[#B03A63] transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                  />
                </div>

                {/* Stepper Circles */}
                {STEP_TITLES.map((title, index) => {
                  const stepNumber = index + 1;
                  const isCompleted = stepNumber < currentStep;
                  const isCurrent = stepNumber === currentStep;
                  const isUpcoming = stepNumber > currentStep;

                  return (
                    <div
                      key={stepNumber}
                      className="flex flex-col items-center relative z-10"
                    >
                      <button
                        type="button"
                        onClick={() => handleJumpToStep(stepNumber)}
                        disabled={isUpcoming}
                        aria-current={isCurrent ? 'step' : undefined}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B03A63] focus-visible:ring-offset-2 ${
                          isCompleted
                            ? 'bg-[#B03A63] text-white cursor-pointer hover:bg-[#902A4E]'
                            : isCurrent
                            ? 'bg-[#B03A63] text-white ring-4 ring-[#F4B6C6] pulsing-rose-ring cursor-default'
                            : 'bg-[#FBE4EA] text-[#7A6A70] cursor-not-allowed'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          stepNumber
                        )}
                      </button>
                      <span
                        className={`text-xs mt-2 font-medium max-w-[80px] text-center leading-tight transition-colors ${
                          isCurrent
                            ? 'font-bold text-[#B03A63]'
                            : isCompleted
                            ? 'text-[#3A2A30]'
                            : 'text-[#3A2A30]/50'
                        }`}
                      >
                        {title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Stepper Header (<600px) */}
            <div className="block sm:hidden">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-[#B03A63] uppercase tracking-wider">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-[#3A2A30]/70 font-medium">
                  {getRemainingStepsText(currentStep)}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3A2A30] mb-3">
                {STEP_TITLES[currentStep - 1]}
              </h3>
            </div>

            {/* Animated Progress Bar (All Screen Sizes) */}
            <div className="mt-4 sm:mt-6">
              <div
                className="w-full bg-[#FBE4EA] h-2.5 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="bg-gradient-to-r from-[#B03A63] to-[#E25C84] h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Live Progress Label */}
              <div
                className="flex items-center justify-between text-xs text-[#3A2A30]/80 mt-2 font-medium"
                aria-live="polite"
              >
                <span className="hidden sm:inline">
                  Step {currentStep} of {totalSteps}:{' '}
                  <strong className="text-[#B03A63]">
                    {STEP_TITLES[currentStep - 1]}
                  </strong>
                </span>
                <span className="sm:hidden text-[11px] text-[#3A2A30]/70">
                  {Math.round(progressPercent)}% complete
                </span>
                <span className="text-[#B03A63] font-semibold text-xs">
                  {getRemainingStepsText(currentStep)}
                </span>
              </div>
            </div>
          </div>

          {/* Form Content / Wizard Card */}
          {!isSubmitted ? (
            <div className="bg-white rounded-3xl border border-[#F4B6C6]/60 p-6 sm:p-9 shadow-xs">
              <form onSubmit={handleSubmit} noValidate>
                {/* STEP 1: Your Details */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B03A63]">
                        Step 1
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                        Tell us about yourself
                      </h2>
                      <p className="text-xs text-[#3A2A30]/75 mt-1">
                        We'll use your WhatsApp number to share photos and discuss pricing directly.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Full Name <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="e.g. Ayesha Malik"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.fullName
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label
                        htmlFor="whatsappNumber"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        WhatsApp Number (Pakistani format 03XX-XXXXXXX){' '}
                        <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={(e) =>
                          handleInputChange('whatsappNumber', e.target.value)
                        }
                        placeholder="0341-4655335"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.whatsappNumber
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.whatsappNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* City Selection */}
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Delivery City <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="e.g. Lahore, Karachi, Islamabad..."
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.city
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      {/* Popular city quick chips */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {POPULAR_CITIES.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handleInputChange('city', c)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              formData.city.toLowerCase() === c.toLowerCase()
                                ? 'bg-[#B03A63] text-white font-semibold'
                                : 'bg-[#FBE4EA]/70 text-[#3A2A30] hover:bg-[#F4B6C6]/50'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                      {errors.city && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: Occasion and Product */}
                {currentStep === 2 && (
                  <div className="space-y-7 animate-in fade-in duration-300">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B03A63]">
                        Step 2
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                        Occasion &amp; Product Type
                      </h2>
                      <p className="text-xs text-[#3A2A30]/75 mt-1">
                        Select the celebration occasion and what type of handcrafted item you have in mind.
                      </p>
                    </div>

                    {/* Occasion Radio Cards */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-2.5">
                        Celebration Occasion <span className="text-[#B03A63]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {OCCASIONS.map((occ) => {
                          const isSelected = formData.occasion === occ;
                          return (
                            <button
                              key={occ}
                              type="button"
                              onClick={() => handleInputChange('occasion', occ)}
                              className={`p-3 rounded-2xl border text-xs text-center font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B03A63] ${
                                isSelected
                                  ? 'border-[#B03A63] bg-[#FBE4EA] text-[#B03A63] font-bold shadow-xs'
                                  : 'border-[#F4B6C6]/50 bg-white hover:border-[#B03A63]/60 text-[#3A2A30]'
                              }`}
                            >
                              {occ}
                            </button>
                          );
                        })}
                      </div>

                      {formData.occasion === 'Other' && (
                        <div className="mt-3">
                          <input
                            type="text"
                            value={formData.occasionOther || ''}
                            onChange={(e) =>
                              handleInputChange('occasionOther', e.target.value)
                            }
                            placeholder="Please specify occasion (e.g. Farewell, Anniversary, Graduation)"
                            className="w-full px-4 py-2.5 rounded-2xl border border-[#F4B6C6] text-xs bg-[#FFF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
                          />
                          {errors.occasionOther && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.occasionOther}</span>
                            </p>
                          )}
                        </div>
                      )}
                      {errors.occasion && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.occasion}</span>
                        </p>
                      )}
                    </div>

                    {/* Product Type Radio Cards */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-2.5">
                        Product Type <span className="text-[#B03A63]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                        {PRODUCT_TYPES.map((pt) => {
                          const isSelected = formData.productType === pt;
                          return (
                            <button
                              key={pt}
                              type="button"
                              onClick={() => handleInputChange('productType', pt)}
                              className={`p-3.5 rounded-2xl border text-xs text-center font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#B03A63] ${
                                isSelected
                                  ? 'border-[#B03A63] bg-[#FBE4EA] text-[#B03A63] font-bold shadow-xs'
                                  : 'border-[#F4B6C6]/50 bg-white hover:border-[#B03A63]/60 text-[#3A2A30]'
                              }`}
                            >
                              {pt}
                            </button>
                          );
                        })}
                      </div>

                      {formData.productType === 'Other' && (
                        <div className="mt-3">
                          <input
                            type="text"
                            value={formData.productTypeOther || ''}
                            onChange={(e) =>
                              handleInputChange('productTypeOther', e.target.value)
                            }
                            placeholder="Please specify product type (e.g. Acrylic Plaque, Piñata Box, Scrapbook)"
                            className="w-full px-4 py-2.5 rounded-2xl border border-[#F4B6C6] text-xs bg-[#FFF8F3]/50 focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
                          />
                          {errors.productTypeOther && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.productTypeOther}</span>
                            </p>
                          )}
                        </div>
                      )}
                      {errors.productType && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.productType}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3: Customization */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B03A63]">
                        Step 3
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                        Customization &amp; Design
                      </h2>
                      <p className="text-xs text-[#3A2A30]/75 mt-1">
                        Choose colors, messages, and attach reference images from Instagram or Pinterest.
                      </p>
                    </div>

                    {/* Color Theme */}
                    <div>
                      <label
                        htmlFor="colorTheme"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Color Theme <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="colorTheme"
                        value={formData.colorTheme}
                        onChange={(e) =>
                          handleInputChange('colorTheme', e.target.value)
                        }
                        placeholder="e.g. Blush Rose & Cream"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.colorTheme
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      {/* Popular Color theme buttons */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {COLOR_THEMES.map((theme) => (
                          <button
                            key={theme}
                            type="button"
                            onClick={() => handleInputChange('colorTheme', theme)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              formData.colorTheme.toLowerCase() === theme.toLowerCase()
                                ? 'bg-[#B03A63] text-white font-semibold'
                                : 'bg-[#FBE4EA]/70 text-[#3A2A30] hover:bg-[#F4B6C6]/50'
                            }`}
                          >
                            {theme}
                          </button>
                        ))}
                      </div>
                      {errors.colorTheme && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.colorTheme}</span>
                        </p>
                      )}
                    </div>

                    {/* Name or message to include */}
                    <div>
                      <label
                        htmlFor="nameOrMessage"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Name or Message to Include
                      </label>
                      <input
                        type="text"
                        id="nameOrMessage"
                        value={formData.nameOrMessage}
                        onChange={(e) =>
                          handleInputChange('nameOrMessage', e.target.value)
                        }
                        placeholder="e.g. 'Happy Birthday Ayesha' or 'Hamza weds Fatima'"
                        className="w-full px-4 py-3 rounded-2xl border border-[#F4B6C6]/70 text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
                      />
                      <p className="text-[11px] text-[#3A2A30]/65 mt-1">
                        Will be written on card, ribbon streamer, or acrylic engraving.
                      </p>
                    </div>

                    {/* Reference Image (Optional) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5">
                        Reference Image (Optional)
                      </label>

                      {/* Image Preview Thumbnail if selected */}
                      {formData.referenceImageDataUrl ? (
                        <div className="flex items-center gap-4 p-3 rounded-2xl border border-[#B03A63]/40 bg-[#FBE4EA]/40">
                          <img
                            src={formData.referenceImageDataUrl}
                            alt="Reference preview"
                            className="w-16 h-16 object-cover rounded-xl border border-[#F4B6C6]"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#3A2A30] truncate">
                              {formData.referenceImageName}
                            </p>
                            <p className="text-[11px] text-emerald-700 font-medium mt-0.5">
                              Ready for preview
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="p-1.5 rounded-full hover:bg-white text-[#B03A63] transition-colors"
                            aria-label="Remove image"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-[#F4B6C6] rounded-2xl p-5 text-center bg-[#FFF8F3]/30 hover:bg-[#FBE4EA]/30 transition-colors">
                          <input
                            type="file"
                            ref={fileInputRef}
                            id="referenceImage"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="referenceImage"
                            className="cursor-pointer flex flex-col items-center justify-center gap-2"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center">
                              <Upload className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-semibold text-[#B03A63]">
                              Click to upload reference photo
                            </span>
                            <span className="text-[11px] text-[#3A2A30]/60">
                              PNG, JPG, or WEBP from Pinterest or phone camera
                            </span>
                          </label>
                        </div>
                      )}

                      {/* Required Note regarding WhatsApp chat attachment */}
                      <div className="mt-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          <strong>Note:</strong> Image upload cannot be sent through the link, so please attach your reference photo in the WhatsApp chat after it opens.
                        </span>
                      </div>
                    </div>

                    {/* Extra Details */}
                    <div>
                      <label
                        htmlFor="extraDetails"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Extra Details &amp; Special Requests
                      </label>
                      <textarea
                        id="extraDetails"
                        rows={3}
                        value={formData.extraDetails || ''}
                        onChange={(e) =>
                          handleInputChange('extraDetails', e.target.value)
                        }
                        placeholder="Any special size preferences, flower styles, fairy lights, fragrance, or packaging notes..."
                        className="w-full px-4 py-3 rounded-2xl border border-[#F4B6C6]/70 text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Delivery */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B03A63]">
                        Step 4
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                        Delivery &amp; Budget
                      </h2>
                      <p className="text-xs text-[#3A2A30]/75 mt-1">
                        When and where do you need your custom parcel delivered?
                      </p>
                    </div>

                    {/* Delivery Date */}
                    <div>
                      <label
                        htmlFor="deliveryDate"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Required Delivery Date <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="date"
                        id="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={(e) =>
                          handleInputChange('deliveryDate', e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.deliveryDate
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      <p className="text-[11px] text-[#3A2A30]/65 mt-1">
                        Same-day &amp; 24hr rush delivery available in Lahore &amp; Pattoki. 2-3 days for other cities.
                      </p>
                      {errors.deliveryDate && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.deliveryDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Delivery Address or Area */}
                    <div>
                      <label
                        htmlFor="deliveryAddress"
                        className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-1.5"
                      >
                        Delivery Address or Area <span className="text-[#B03A63]">*</span>
                      </label>
                      <input
                        type="text"
                        id="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={(e) =>
                          handleInputChange('deliveryAddress', e.target.value)
                        }
                        placeholder="e.g. DHA Phase 5, Lahore or complete street address"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm bg-[#FFF8F3]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B03A63] transition-all ${
                          errors.deliveryAddress
                            ? 'border-red-400 bg-red-50/30'
                            : 'border-[#F4B6C6]/70'
                        }`}
                      />
                      {errors.deliveryAddress && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.deliveryAddress}</span>
                        </p>
                      )}
                    </div>

                    {/* Budget Range (Optional) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3A2A30] mb-2">
                        Budget Range (Optional)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {BUDGET_OPTIONS.map((b) => {
                          const isSelected = formData.budgetRange === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => handleInputChange('budgetRange', b)}
                              className={`p-3 rounded-2xl border text-xs text-center font-medium transition-all ${
                                isSelected
                                  ? 'border-[#B03A63] bg-[#FBE4EA] text-[#B03A63] font-bold'
                                  : 'border-[#F4B6C6]/50 bg-white hover:border-[#B03A63]/60 text-[#3A2A30]'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Review and Send */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B03A63]">
                        Step 5
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#3A2A30] mt-0.5">
                        Review Your Custom Order
                      </h2>
                      <p className="text-xs text-[#3A2A30]/75 mt-1">
                        Please review the details below. Click "Edit" beside any section to adjust your responses before sending to WhatsApp.
                      </p>
                    </div>

                    {/* Section 1: Customer Details */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3]/50">
                      <div className="flex items-center justify-between pb-3 border-b border-[#F4B6C6]/30 mb-3">
                        <h4 className="font-serif font-bold text-sm text-[#3A2A30] flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#B03A63] text-white flex items-center justify-center text-[10px]">
                            1
                          </span>
                          <span>Your Details</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(1)}
                          className="text-xs font-semibold text-[#B03A63] hover:underline flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Name:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.fullName}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">WhatsApp:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.whatsappNumber}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">City:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.city}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Occasion & Product */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3]/50">
                      <div className="flex items-center justify-between pb-3 border-b border-[#F4B6C6]/30 mb-3">
                        <h4 className="font-serif font-bold text-sm text-[#3A2A30] flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#B03A63] text-white flex items-center justify-center text-[10px]">
                            2
                          </span>
                          <span>Occasion &amp; Product</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(2)}
                          className="text-xs font-semibold text-[#B03A63] hover:underline flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Occasion:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.occasion === 'Other' && formData.occasionOther
                              ? `Other (${formData.occasionOther})`
                              : formData.occasion}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Product Type:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.productType === 'Other' && formData.productTypeOther
                              ? `Other (${formData.productTypeOther})`
                              : formData.productType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Customization */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3]/50">
                      <div className="flex items-center justify-between pb-3 border-b border-[#F4B6C6]/30 mb-3">
                        <h4 className="font-serif font-bold text-sm text-[#3A2A30] flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#B03A63] text-white flex items-center justify-center text-[10px]">
                            3
                          </span>
                          <span>Customization</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(3)}
                          className="text-xs font-semibold text-[#B03A63] hover:underline flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Color Theme:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.colorTheme}
                          </span>
                        </div>
                        {formData.nameOrMessage && (
                          <div>
                            <span className="text-[#3A2A30]/60 block text-[11px]">Inscribed Note / Name:</span>
                            <span className="font-semibold text-[#3A2A30]">
                              "{formData.nameOrMessage}"
                            </span>
                          </div>
                        )}
                        {formData.referenceImageName && (
                          <div className="flex items-center gap-3 pt-1">
                            {formData.referenceImageDataUrl && (
                              <img
                                src={formData.referenceImageDataUrl}
                                alt="Thumb"
                                className="w-10 h-10 object-cover rounded-lg border border-[#F4B6C6]"
                              />
                            )}
                            <div>
                              <span className="text-[#3A2A30]/60 block text-[11px]">Reference Photo:</span>
                              <span className="font-medium text-[#3A2A30]">
                                {formData.referenceImageName} (will attach in chat)
                              </span>
                            </div>
                          </div>
                        )}
                        {formData.extraDetails && (
                          <div>
                            <span className="text-[#3A2A30]/60 block text-[11px]">Extra Details:</span>
                            <span className="text-[#3A2A30] italic">
                              {formData.extraDetails}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Section 4: Delivery */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#F4B6C6]/60 bg-[#FFF8F3]/50">
                      <div className="flex items-center justify-between pb-3 border-b border-[#F4B6C6]/30 mb-3">
                        <h4 className="font-serif font-bold text-sm text-[#3A2A30] flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-[#B03A63] text-white flex items-center justify-center text-[10px]">
                            4
                          </span>
                          <span>Delivery &amp; Budget</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => handleJumpToStep(4)}
                          className="text-xs font-semibold text-[#B03A63] hover:underline flex items-center gap-1"
                        >
                          <Edit2 className="w-3 h-3" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Date:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.deliveryDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Address / Area:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.deliveryAddress}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#3A2A30]/60 block text-[11px]">Budget Range:</span>
                          <span className="font-semibold text-[#3A2A30]">
                            {formData.budgetRange || 'Open'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Dispatch Callout */}
                    <div className="p-4 rounded-2xl bg-[#E7F8EE] border border-emerald-300 text-xs text-emerald-950 flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-emerald-900">
                          Ready to Chat on WhatsApp!
                        </p>
                        <p className="text-emerald-800 mt-0.5 leading-relaxed">
                          Clicking below opens WhatsApp with all your customized choices cleanly formatted. If you selected a reference photo, please attach it in the chat window.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Action Buttons */}
                <div className="pt-8 border-t border-[#F4B6C6]/40 mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl border border-[#B03A63]/50 text-[#B03A63] hover:bg-[#FBE4EA]/50 font-bold text-sm flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#B03A63]"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-2xl bg-[#B03A63] hover:bg-[#902A4E] text-white font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#B03A63]"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 transition-all focus-visible:ring-2 focus-visible:ring-emerald-600"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Order on WhatsApp</span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Thank You State */
            <div className="bg-white rounded-3xl border border-[#F4B6C6]/60 p-8 sm:p-12 text-center shadow-lg animate-in fade-in zoom-in-95 duration-400">
              <div className="w-20 h-20 rounded-full bg-[#FBE4EA] text-[#B03A63] flex items-center justify-center mx-auto mb-6 relative">
                <Heart className="w-10 h-10 fill-[#B03A63] text-[#B03A63]" />
                <span className="absolute -top-1 -right-1 text-2xl animate-float">
                  ✨
                </span>
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-[#B03A63] block mb-2">
                Order Received With Love
              </span>

              <h2 className="font-serif italic text-3xl sm:text-4xl font-bold text-[#3A2A30] mb-3">
                JazakAllah Khair, {formData.fullName}!
              </h2>

              <p className="text-sm sm:text-base text-[#3A2A30]/85 max-w-lg mx-auto leading-relaxed mb-6">
                Your custom gift idea has been transmitted to our workshop lead. We'll reply within a few hours on WhatsApp with confirmation, price quotes, and timeline.
              </p>

              {/* Chat Reminder Box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#FFF8F3] border border-[#F4B6C6] text-xs text-[#3A2A30]/90 text-left mb-8 space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#B03A63]">
                  <MessageCircle className="w-4 h-4" />
                  <span>Next Steps on WhatsApp:</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-[#3A2A30]/80">
                  <li>Attach any Pinterest reference pictures in the chat.</li>
                  <li>We'll send photos/videos of material and ribbon selections.</li>
                  <li>Advance payment details (JazzCash, Nayapay, or Bank Transfer) will be shared.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-[#B03A63] text-[#B03A63] hover:bg-[#FBE4EA] font-semibold text-xs transition-colors"
                >
                  Submit Another Custom Idea
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-[#B03A63] hover:bg-[#902A4E] text-white font-bold text-xs shadow-md transition-all"
                >
                  Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
