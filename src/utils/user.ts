import { USER_LOCAL_STORAGE_KEY } from "../const/user";

export type User = {
  name: string;
  last_name: string;
  personal_code: string;
  ILTU: string;
  EIDAS: string;
  SSO_ID: string;
  VAR_ID: string;
  SSO_IP: string;
  SSO_LAIKAS: string;
  SSO_TIPAS: string;
  SSO_SALTINIS: string;
  VASU_ID: string;
  ASM_NR: string;
  AVD_NR: string;
  JA_OBJ_ID: string;
  IGAL_ID: string;
  AMNT_TIPAS: string;
  VAR_ID_ATSTOVAUJAMOJO: string;
  PROK_ID: string;
  FAVA_ID: string;
  VAID_KODAS: string;
  AMN_ID: string;
  VAR_ID_TARPININKO: string;
  FFVA_ID: string;
  FASM_KODAS: string;
  AMN_ID_TEIKEJO_FA: string;
};


const getUserFromLocalStorage = (): User | undefined => {
  let user: User;

  try {
    const value = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    if (typeof value === 'string') {
      user = JSON.parse(value);
    }

    return user;
  } catch {
    return user;
  }
};

export const getUser = (): any => getUserFromLocalStorage();
