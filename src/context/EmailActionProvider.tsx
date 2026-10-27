import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copyEmailAddress, socialHref } from "../config/site";
import { EmailCopiedToast } from "../components/EmailCopiedToast";

type EmailActionContextValue = {
  href: string | null;
  prepareEmail: () => Promise<void>;
};

const EmailActionContext = createContext<EmailActionContextValue | null>(null);

export function EmailActionProvider({ children }: { children: ReactNode }) {
  const href = socialHref("email");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const prepareEmail = useCallback(async () => {
    const ok = await copyEmailAddress();
    if (ok) setCopied(true);
  }, []);

  const value = useMemo(() => ({ href, prepareEmail }), [href, prepareEmail]);

  return (
    <EmailActionContext.Provider value={value}>
      {children}
      <EmailCopiedToast visible={copied} />
    </EmailActionContext.Provider>
  );
}

export function useEmailAction() {
  const context = useContext(EmailActionContext);
  if (!context) {
    throw new Error("useEmailAction must be used within EmailActionProvider");
  }
  return context;
}
