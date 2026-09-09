"use client";

import { useMemo, useState } from "react";
import { useForm } from "@formspree/react";
import { TextField } from "@mui/material";
import Select from "react-select";
import { countryCodes } from "@/components/CountryCodeList";

// Replace with your own Formspree form ID (https://formspree.io → your form → endpoint).
const FORMSPREE_FORM_ID = "mredebve";

const fieldSx = {
  marginBottom: "1.25rem",
  "& .MuiFormLabel-asterisk": { color: "#dc2626" },
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const [countryCode, setCountryCode] = useState(null);
  const [phone, setPhone] = useState("");
  const [showCodeError, setShowCodeError] = useState(false);
  const menuPortalTarget =
    typeof document !== "undefined" ? document.body : undefined;

  const countryCodeOptions = useMemo(
    () =>
      countryCodes.map((c) => ({
        value: c.code,
        label: `${c.name} (${c.code})`,
      })),
    []
  );

  const fullPhone =
    countryCode?.value && phone.trim()
      ? `${countryCode.value} ${phone.trim()}`
      : "";

  const selectStyles = {
    control: (base, s) => ({
      ...base,
      minHeight: "56px",
      borderColor: s.isFocused ? "#2563EB" : "rgba(30,41,59,0.15)",
      borderRadius: 0,
      boxShadow: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": { borderColor: "#2563EB" },
      "& .MuiFormLabel-asterisk": { color: "red" },
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  if (state.succeeded) {
    return (
      <div className="border border-ink/15 p-6 sm:p-8">
        <h3 className="font-serif text-[1.15rem] text-ink">Thank you</h3>
        <p className="mt-2 max-w-[52ch] text-[0.96rem] text-ink2">
          We&apos;ve received your message. The TechCraft Infotech team will get
          back to you soon.
        </p>
      </div>
    );
  }

  const onSubmit = (e) => {
    if (!countryCode?.value) {
      e.preventDefault();
      setShowCodeError(true);
      return;
    }
    handleSubmit(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField name="name" id="name" label="Your Name" variant="outlined" fullWidth required sx={fieldSx} />

      <TextField name="email" id="email" type="email" label="Email ID" variant="outlined" fullWidth required sx={fieldSx} />

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <div className="w-full sm:w-[16rem]">
          <Select isSearchable required instanceId="country-code-select" inputId="country_code" placeholder="Country Code" options={countryCodeOptions} value={countryCode}
            onChange={(sel) => {
              setCountryCode(sel);
              setShowCodeError(false);
            }} menuPosition="fixed" menuPortalTarget={menuPortalTarget} styles={selectStyles} />
          {showCodeError && (
            <p className="mt-1 text-[0.8rem] text-red-600">
              Please select a country code.
            </p>
          )}
        </div>

        <TextField id="phone_number" type="tel" label="Phone Number" variant="outlined" fullWidth required value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ "& .MuiFormLabel-asterisk": { color: "red" }, }} />
      </div>

      {/* Combined value actually sent to Formspree */}
      <input type="hidden" name="phone" value={fullPhone} />

      <TextField name="message" id="message" label="Please Enter Your Message Here" variant="outlined" fullWidth required multiline minRows={5} sx={fieldSx} />

      {state.errors?.getFormErrors?.().length > 0 && (
        <p className="mb-4 text-[0.9rem] text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <button type="submit" disabled={state.submitting} className="bg-brass px-5 py-3 text-[0.95rem] font-medium text-ink hover:bg-[#c79549] disabled:opacity-50">
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
