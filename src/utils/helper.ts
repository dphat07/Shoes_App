import { Dimensions, Platform } from "react-native";
import { Edge } from "react-native-safe-area-context";
import { QueryClient } from "@tanstack/react-query";
import { IconComponentProps } from "../components/icon/type";
import dayjs from "dayjs";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      networkMode: "online",
      retry: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
    mutations: {
      networkMode: "online",
    },
  },
});
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
  Dimensions.get("screen");

export enum UserRole {
  REQUEST = 0,
  MANAGER = 1,
  MEMBER = 2,
  PARTNEROWNER = 3,
  PARTNERMANAGER = 4,
  PARTNERMEMBER = 5,
  GUEST = 6,
  HR = 7,
}

export const EDGES: Record<
  "LEFT" | "RIGHT" | "LEFT_RIGHT" | "TOP_BOTTOM" | "FULL" | "LEFT_RIGHT_BOTTOM",
  Edge[]
> = {
  LEFT: ["left"],
  RIGHT: ["right"],
  LEFT_RIGHT: ["left", "right"],
  LEFT_RIGHT_BOTTOM: ["left", "right", "bottom"],
  FULL: ["left", "right", "top", "bottom"],
  TOP_BOTTOM: ["top", "bottom"],
};
export const Helper = {
  isIOS: () => {
    return Platform.OS === "ios";
  },
  isAndroid: () => {
    return Platform.OS === "android";
  },
  isString(x: unknown): x is string {
    return typeof x === "string";
  },
  isIcon(
    icon: IconComponentProps | React.ReactNode
  ): icon is IconComponentProps {
    return (icon as IconComponentProps)?.name !== undefined;
  },

  isStartWithChar: (x: string) => {
    if (!x) return x;
    if (x.includes("none")) return 0;
    return x.startsWith("_") ? Number(x.replace("_", "")) : x;
  },

  getKeyExtractor: (item: unknown, index: number): string => {
    return `${item}-${index}`;
  },

  formatSecondsToMinutes: (seconds: number) => {
    if (seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  },

  isNetworkError(e: unknown) {
    const str = String(e);
    return (
      str.includes("Abort") ||
      str.includes("Network request failed") ||
      str.includes("Failed to fetch") ||
      str.includes("Network Error") ||
      str.includes("timeout exceeded")
    );
  },
  isServerError(e: unknown) {
    const str = String(e);
    return (
      str.includes("Request failed with status code 502") ||
      str.includes("Request failed with status code 500")
    );
  },
  format_YY_MM_DD: (date: Date) => {
    return dayjs(date).format("YYYY-MM-DD");
  },
  startMonth: () => {
    return dayjs().startOf("month").toDate();
  },
  endtMonth: () => {
    return dayjs().endOf("month").toDate();
  },
  hasDateValue: (date: string) => {
    if (!date) return null;
    return dayjs(date).toDate();
  },
};