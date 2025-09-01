export const form = {
  inputs: {
    visible: {
      name: {
        name: "name",
        placeholder: "الاسم",
      },
      phone: {
        name: "phone",
        placeholder: "رقم الهاتف",
      },
      service: {
        name: "service",
        placeholder: "الخدمة",
      },
    },
  },
  buttonText: "احجز استشارتك المجانية",
  validationMessages: {
    name: {
      required: "الاسم مطلوب",
      invalid: "لا يُسمح بالأرقام أو الرموز الخاصة",
      min: "يجب أن يحتوي الاسم على 3 أحرف على الأقل",
      repeated: "لا يمكن أن يتكون الاسم من نفس الحرف مكررًا",
    },
    phone: {
      required: "رقم الهاتف مطلوب",
      min: "يجب أن يتكون الرقم من 9 أرقام على الأقل",
    },
    service: {
      required: "يرجى اختيار الخدمة",
    },
  },
  failMessage: "قد تكون معلوماتك مسجلة مسبقاً",
  successMessage: "لقد تلقينا معلوماتك وسنتواصل معك قريباً",
};
