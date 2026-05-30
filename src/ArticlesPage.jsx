import React from 'react';
import { ScrollIndicator } from './HeroSection';
import blog1Img from './assets/Blog1/image.png';
import blog2Img from './assets/Blog2/image.png';
import blog3Img from './assets/Blog3/image.png';

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: "MMTabReal: Real-World Benchmark for Multimodal Table Understanding",
      description: "Curated a real-world multimodal table benchmark featuring images, logos, and icons within cells to evaluate MLLMs and identify failure modes.",
      date: "ACL 2026",
      category: "Publication",
      image: blog1Img,
      link: "https://arxiv.org/pdf/2505.21771v2",
      details: [
        'Evaluates multimodal table understanding on real-world data.',
        'Includes images, logos, and icons embedded inside table cells.',
        'Highlights failure modes of MLLMs on structured visual content.'
      ]
    },
    {
      id: 2,
      title: "SAGE: Structure Aware Graph Expansion for Retrieval of Heterogeneous Data",
      description: "Designed a structure-aware graph expansion method that builds a chunk graph using metadata similarity and improves retrieval via seed-based neighbor expansion.",
      date: "Under Review",
      category: "Preprint",
      image: blog2Img,
      link: "https://arxiv.org/pdf/2602.16964",
      details: [
        'Builds a chunk graph using metadata similarity.',
        'Improves retrieval through seed-based neighbor expansion.',
        'Combines dense and sparse filtering for heterogeneous data.'
      ]
    },
    {
      id: 3,
      title: "Applied Artificial Intelligence to Boost Team Effectiveness through a Personality and Skill-Based Strategy",
      description: "Developed a BERT-based regression framework to infer OCEAN traits and optimize team formation by skill and personality.",
      date: "ICRTAC 2023",
      category: "Conference",
      image: blog3Img,
      link: "https://ieeexplore.ieee.org/document/10480783",
      details: [
        'Infers OCEAN personality traits using BERT-based regression.',
        'Optimizes team formation based on skill and personality.',
        'Presents a strategy for improving team effectiveness.'
      ]
    }
  ];

  const [expandedArticleId, setExpandedArticleId] = React.useState(null);
  const [fullscreenArticleId, setFullscreenArticleId] = React.useState(null);
  const activeArticle = articles.find((article) => article.id === expandedArticleId) || null;
  const fullscreenArticle = articles.find((article) => article.id === fullscreenArticleId) || null;

  React.useEffect(() => {
    if (!fullscreenArticle) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [fullscreenArticle]);

  // Dynamic grid columns based on article count
  const getGridClass = () => {
    const count = articles.length;
    if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"; // 2x2 for 4 items
    if (count % 3 === 0) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // 3 columns for 3, 6, 9...
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Default to 3
  };

  return (
    <div id="publications-section" className="min-h-screen bg-black text-white flex items-start px-4 sm:px-8 py-8 overflow-y-auto lg:overflow-hidden relative">

      {/* Max-width container with flex layout */}
      <div className="relative max-w-7xl mx-auto w-full h-full pt-8 lg:pt-0">

        {/* Left Label: "ARTICLE /" */}
        <div className="hidden lg:block absolute left-0 top-0">
          <p
            className="text-m font-semibold text-[#8A8A8A] tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            PUBLICATIONS /
          </p>
        </div>

        {/* Main Content Area */}
        <div className="w-full h-full overflow-y-visible lg:overflow-y-auto lg:pt-14" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .flex-1::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {!activeArticle ? (
            <div className={`grid gap-6 mb-12 ${getGridClass()}`}>
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  isActive={false}
                  onSelect={() => setExpandedArticleId(article.id)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_0.7fr] gap-6 mb-12 items-stretch">
              <ExpandedArticlePanel
                article={activeArticle}
                onClear={() => setExpandedArticleId(null)}
                onExpandImage={() => setFullscreenArticleId(activeArticle?.id || null)}
              />

              <div className="flex flex-col gap-6 h-full">
                {articles
                  .filter((article) => article.id !== expandedArticleId)
                  .map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      isActive={false}
                      compact
                      onSelect={() => setExpandedArticleId(article.id)}
                    />
                  ))}
              </div>
            </div>
          )}

          {fullscreenArticle && (
            <FullscreenImageModal
              article={fullscreenArticle}
              onClose={() => setFullscreenArticleId(null)}
            />
          )}


        </div>
      </div>
      
      <ScrollIndicator targetId="projects-section" />
    </div>
  );
};

const ExpandedArticlePanel = ({ article, onClear, onExpandImage }) => {
  if (!article) return null;

  const isExternal = article.link.startsWith('http');

  return (
    <div
      className="border border-white rounded-2xl overflow-hidden bg-[#050505] shadow-[10px_10px_0px_white] min-h-[420px] flex flex-col lg:w-full"
      onClick={onClear}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClear();
        }
      }}
    >
      <div className="p-5 sm:p-6 lg:p-7">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {article.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.75fr] gap-6 items-stretch">
          <div
            className="relative bg-black overflow-hidden rounded-xl min-h-[220px] lg:min-h-[360px] border border-white/10 h-full flex items-center justify-center p-4 group cursor-zoom-in"
            onClick={(event) => {
              event.stopPropagation();
              onExpandImage();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onExpandImage();
              }
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-contain bg-black"
              style={{ minHeight: '220px' }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white text-black text-[10px] font-bold rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {article.category}
              </span>
            </div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onExpandImage();
              }}
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white opacity-90 transition-all hover:bg-white hover:text-black"
              aria-label="Expand image"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="mb-2 text-[#8A8A8A] text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {article.date}
              </div>
              <p className="text-[#CFCFCF] text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {article.description}
              </p>
            </div>

            <div>
              <ul className="list-disc list-inside text-[#CFCFCF] text-sm leading-relaxed space-y-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {article.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onExpandImage();
                  }}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-transparent text-white text-xs font-bold rounded-full border border-white hover:bg-white hover:text-black transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Expand Image
                </button>
                <a
                  href={article.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-black text-xs font-bold rounded-full border border-white hover:bg-transparent hover:text-white transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Open Link
                </a>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onClear();
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 border border-white/25 text-white text-xs rounded-full hover:bg-white hover:text-black transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Back to Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FullscreenImageModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black text-white hover:bg-white hover:text-black transition-colors"
        aria-label="Close fullscreen image"
      >
        <span className="text-xl leading-none">×</span>
      </button>

      <div className="w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
        <img
          src={article.image}
          alt={article.title}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

const ArticleCard = ({ article, isActive, compact = false, onSelect }) => {
  const isExternal = article.link.startsWith('http');

  return (
    <div onClick={onSelect} className="group relative block h-full text-left cursor-pointer">
      <div className={`relative bg-black border rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${isActive ? 'border-white' : 'border-[#8A8A8A] hover:border-white/70'}`}>
        {/* Image */}
        <div className="relative bg-black overflow-hidden min-h-[220px] lg:min-h-[280px] rounded-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-contain bg-black transition-all duration-300 group-hover:scale-[1.01]"
            style={{ aspectRatio: '16/9' }}
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg width="400" height="225" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="225" fill="%231A1A1A"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%238A8A8A" font-size="14" font-family="DM Sans"%3E${article.category}%3C/text%3E%3C/svg%3E`;
            }}
          />

          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white text-black text-[10px] font-bold rounded" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className={`text-sm font-bold text-white mb-2 leading-tight`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {article.title}
          </h3>

          {!compact && (
            <>
              <div className="mb-1.5">
                <span className="text-[#8A8A8A] text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {article.date}
                </span>
              </div>

              <p className="text-[#8A8A8A] text-xs leading-relaxed mt-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {article.description}
              </p>
            </>
          )}

          <div className="mt-3 flex items-center justify-between gap-3">
            {!compact && (
              <span className={`text-[10px] uppercase tracking-[0.18em] ${isActive ? 'text-white' : 'text-white/45'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Click to open
              </span>
            )}
            {!compact && (
              <a
                href={article.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center justify-center bg-white text-black font-bold rounded-full border border-white hover:bg-transparent hover:text-white transition-colors px-3 py-1.5 text-[10px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExternalLinks = () => {
  const links = [
    { title: "More Publications", link: "https://github.com/prasham1515", svgPlaceholder: "GP" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 pt-6 pb-6">
      {links.map((item, index) => (
        <LinkButton key={index} item={item} />
      ))}
    </div>
  );
};

const LinkButton = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative px-4 py-2 border-2 transition-all duration-300 overflow-hidden"
        style={{ borderColor: 'white', background: isHovered ? 'white' : 'transparent' }}
      >
        <div className="relative flex items-center gap-2">
          <span
            className="text-[10px] font-bold transition-colors duration-300"
            style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? 'black' : 'white' }}
          >
            {item.svgPlaceholder}
          </span>

          <span
            className="text-xs font-bold transition-colors duration-300 whitespace-nowrap"
            style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? 'black' : 'white' }}
          >
            {item.title}
          </span>

          <svg
            className="w-2.5 h-2.5 transition-all duration-300"
            style={{ stroke: isHovered ? 'black' : 'white', transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)' }}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ArticlesPage;