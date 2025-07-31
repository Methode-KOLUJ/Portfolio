import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "KOLUJ_DEV",
  description = "Bienvenue sur le site officiel de KOLUJ_DEV, le Développeur prêt à propulser votre business.",
  keywords = "Développeur, DEV, Programmation, Intelligence Artificielle, SEO",
  image = "/Home/ONG SEED.jpg",
  url = "https://www.kolujdev.dev",
}) => {
  const metaKeywords = keywords.trim() !== "" ? keywords : "Développeur, DEV, Programmation, Intelligence Artificielle, SEO";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
