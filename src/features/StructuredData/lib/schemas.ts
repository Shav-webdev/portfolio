import { contactInfo } from "@/data/contact"

/**
 * Site configuration - update this with your actual domain
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || contactInfo.portfolio
const PROFILE_IMAGE_URL = `${SITE_URL}/avatar.jpg`

/**
 * Personal information
 */
const PERSON_NAME = "Shavarsh Abrahamyan"
const PERSON_ALTERNATE_NAME = "shavabraham"
const PERSON_IDENTIFIER = "123456sh"
const PERSON_DESCRIPTION =
  "With nearly 7 years of comprehensive experience in web development, I specialize in building dynamic and scalable web applications using a variety of modern technologies. I am dedicated to crafting high-quality code and delivering exceptional user experiences. My passion for continuous learning and staying abreast of the latest industry trends and technologies positions me well to contribute to diverse and challenging projects."

/**
 * Parse address into structured components
 */
function parseAddress(address: string) {
  // Format: "Yerkatgits 6 apt. 2, Yerevan, Armenia"
  const parts = address.split(",").map((p) => p.trim())
  
  return {
    streetAddress: parts[0] || "",
    addressLocality: parts[1] || "Yerevan",
    addressRegion: parts[1] || "Erebouni",
    addressCountry: "AM",
    postalCode: "0005",
  }
}

/**
 * Generate ProfilePage structured data
 */
export function getProfilePageSchema() {
  const address = parseAddress(contactInfo.address)
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: PERSON_NAME,
      alternateName: PERSON_ALTERNATE_NAME,
      identifier: PERSON_IDENTIFIER,
      description: PERSON_DESCRIPTION,
      image: PROFILE_IMAGE_URL,
      sameAs: [
        contactInfo.linkedin,
        contactInfo.github,
      ],
      url: SITE_URL,
      email: contactInfo.email,
      telephone: contactInfo.phone.replace(/\s/g, ""),
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    },
  }
}

/**
 * Generate ContactPage structured data
 */
export function getContactPageSchema() {
  const address = parseAddress(contactInfo.address)
  
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/contact`,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": SITE_URL,
      name: "Portfolio",
      logo: PROFILE_IMAGE_URL,
      telephone: contactInfo.phone.replace(/\s/g, ""),
      email: contactInfo.email,
      sameAs: [contactInfo.linkedin, contactInfo.github],
      url: SITE_URL,
      image: PROFILE_IMAGE_URL,
      description: PERSON_DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    },
  }
}

