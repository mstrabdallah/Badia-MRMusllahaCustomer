export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length <= 11) || "Phone must be less than 11 Number",
      (v) =>
        Number.isInteger(Number(v)) || "The value must be an integer number",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
