import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import FingerprintJS from "@fingerprintjs/fingerprintjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate a public user ID using FingerprintJS
 * This creates a unique identifier for anonymous users
 */
export const getGeneratedPublicUserId = async (): Promise<string> => {
  const fpPromise = FingerprintJS.load()
  const fp = await fpPromise
  const identity = await fp.get()
  return identity.visitorId
}
