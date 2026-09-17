import { getDistrict } from "./districts";
import { getProject } from "./projects";
import { getService } from "./services";
import { waLink } from "./site";

/** Sayfaya özel WhatsApp bağlamı. Panelde etiket, sohbette kapanış cümlesi olur. */
export type WaContext = {
  /** Örn. "Bakırköy bölge sayfası" */
  label: string;
  /** Mobil bar için kısa ad. Örn. "Bakırköy" */
  short?: string;
  /** Sayfa için yazılmış ana mesaj. */
  message: string;
};

/** Hazır mesaj seçenekleri. Her biri tek dokunuşla WhatsApp'ta açılır. */
export type WaTopic = {
  id: string;
  label: string;
  message: string;
};

export const waTopics: WaTopic[] = [
  {
    id: "kesif",
    label: "Ücretsiz keşif randevusu",
    message: "Merhaba, ücretsiz keşif randevusu almak istiyorum.",
  },
  {
    id: "kentsel-donusum",
    label: "Riskli yapı ve kentsel dönüşüm",
    message:
      "Merhaba, binamızın riskli yapı durumunu ve kentsel dönüşüm sürecini değerlendirmek istiyorum.",
  },
  {
    id: "kat-karsiligi",
    label: "Kat karşılığı teklif",
    message:
      "Merhaba, arsamız için kat karşılığı inşaat teklifi almak istiyorum.",
  },
  {
    id: "ozel-taahhut",
    label: "Özel taahhüt projeleri",
    message:
      "Merhaba, özel taahhüt projesi kapsamında teklif almak istiyorum.",
  },
  {
    id: "guclendirme",
    label: "Deprem güçlendirme",
    message:
      "Merhaba, binamız için deprem güçlendirme çalışması hakkında bilgi almak istiyorum.",
  },
  {
    id: "maliyet",
    label: "Maliyet ve teslim süresi",
    message:
      "Merhaba, tahmini maliyet ve teslim süresi hakkında bilgi almak istiyorum.",
  },
];

export function waContextFor(
  pathname: string | null | undefined,
): WaContext | null {
  if (!pathname) return null;
  const [section, slug] = pathname.split("/").filter(Boolean);

  if (section === "hizmetler") {
    const service = slug ? getService(slug) : undefined;
    if (service) {
      return {
        label: `${service.name} hizmet sayfası`,
        short: service.name,
        message: `Merhaba, ${service.name} hizmeti hakkında bilgi almak istiyorum.`,
      };
    }
    return {
      label: "Hizmetler sayfası",
      message: "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.",
    };
  }

  if (section === "bolgeler") {
    const district = slug ? getDistrict(slug) : undefined;
    if (district) {
      return {
        label: `${district.name} bölge sayfası`,
        short: district.name,
        message: `Merhaba, ${district.name} bölgesindeki yapım için keşif randevusu almak istiyorum.`,
      };
    }
    return {
      label: "Bölgeler sayfası",
      message:
        "Merhaba, hizmet verdiğiniz bölgeler hakkında bilgi almak istiyorum.",
    };
  }

  if (section === "projeler") {
    const project = slug ? getProject(slug) : undefined;
    if (project) {
      return {
        label: `${project.name} proje sayfası`,
        short: project.name,
        message: `Merhaba, ${project.name} benzeri bir proje hakkında bilgi almak istiyorum.`,
      };
    }
    return {
      label: "Projeler sayfası",
      message: "Merhaba, tamamlanan projeleriniz hakkında bilgi almak istiyorum.",
    };
  }

  if (section === "hakkimizda") {
    return {
      label: "Hakkımızda sayfası",
      message:
        "Merhaba, firmanız ve referanslarınız hakkında bilgi almak istiyorum.",
    };
  }

  return null;
}

/** Tüm etiketler "…sayfası" ile bittiği için kapanış cümlesi tek ekle kurulur. */
function closingLine(context: WaContext) {
  return `${context.label}ndan yazıyorum.`;
}

/** Konu mesajına sayfa bağlamını doğal bir kapanış cümlesi olarak ekler. */
export function withTrail(message: string, context: WaContext | null) {
  return context ? `${message}\n\n${closingLine(context)}` : message;
}

export function waTopicLink(
  topic: WaTopic,
  pathname?: string | null,
): string {
  return waLink(withTrail(topic.message, waContextFor(pathname)));
}

export function waMessageFor(
  pathname: string | null | undefined,
  fallback?: string,
) {
  const context = waContextFor(pathname);
  if (context) return withTrail(context.message, context);
  return fallback;
}

export function waLinkFor(
  pathname: string | null | undefined,
  fallback?: string,
) {
  return waLink(waMessageFor(pathname, fallback));
}
