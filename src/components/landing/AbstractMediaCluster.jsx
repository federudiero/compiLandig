import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Image as ImageIcon, Video } from "lucide-react";

function MediaFallback({ title, badge, type = "image" }) {
  return (
    <div className="abstract-media-fallback">
      <div className="abstract-media-fallback-orb abstract-media-fallback-orb-a" />
      <div className="abstract-media-fallback-orb abstract-media-fallback-orb-b" />
      <div className="abstract-media-fallback-line abstract-media-fallback-line-a" />
      <div className="abstract-media-fallback-line abstract-media-fallback-line-b" />

      <div className="abstract-media-fallback-content">
        <div className="abstract-media-type-pill">
          {type === "video" ? <Play className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
          <span>{type === "video" ? "Video" : "Imagen"}</span>
        </div>

        {badge ? <p className="abstract-media-fallback-badge">{badge}</p> : null}
        <h4 className="abstract-media-fallback-title">{title}</h4>
        <p className="abstract-media-fallback-text">
          Reemplazá este espacio cargando tu archivo real en <strong>/public/media/compi/</strong>.
        </p>
      </div>
    </div>
  );
}

function VideoReadyPoster({ item }) {
  const [posterFailed, setPosterFailed] = useState(false);
  const hasPoster = Boolean(item?.poster) && !posterFailed;

  return (
    <div className={`abstract-video-poster ${item?.posterTone ? `abstract-video-poster-${item.posterTone}` : ""}`.trim()}>
      <div className="abstract-video-poster-grid" />

      {hasPoster ? (
        <img
          className="abstract-video-poster-image"
          src={item.poster}
          alt={item.alt || item.title || "Poster del video"}
          loading="lazy"
          onError={() => setPosterFailed(true)}
        />
      ) : (
        <MediaFallback title={item?.title || "Video de la sección"} badge={item?.badge} type="video" />
      )}

      <div className="abstract-video-poster-vignette" />

      <div className="abstract-video-poster-chip">
        <Video className="h-4 w-4" />
        <span>Espacio listo para video</span>
      </div>

      <div className="abstract-video-poster-play">
        <span>
          <Play className="h-6 w-6 fill-current" />
        </span>
      </div>
    </div>
  );
}

function MediaCard({ item, featured = false }) {
  const [failed, setFailed] = useState(false);

  const type = item?.type === "video" ? "video" : "image";
  const hasSource = Boolean(item?.src) && !failed;
  const mediaClassName = useMemo(() => {
    const shape = item?.shape || "blob";
    return `abstract-media-card ${featured ? "abstract-media-card-featured" : "abstract-media-card-secondary"} abstract-shape-${shape}`;
  }, [featured, item?.shape]);

  const renderContent = () => {
    if (hasSource && type === "video") {
      return (
        <video
          className="abstract-media-object"
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      );
    }

    if (type === "video" && item?.poster) {
      return <VideoReadyPoster item={item} />;
    }

    if (hasSource) {
      return (
        <img
          className="abstract-media-object"
          src={item.src}
          alt={item.alt || item.title || "Imagen de la sección"}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      );
    }

    return <MediaFallback title={item?.title || "Contenido visual"} badge={item?.badge} type={type} />;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className={mediaClassName}
    >
      <div className="abstract-media-inner">
        {renderContent()}

        <div className="abstract-media-overlay" />

        {item?.badge ? <span className="abstract-media-badge">{item.badge}</span> : null}

        {(item?.title || item?.text) && (
          <div className="abstract-media-copy">
            {item?.title ? <h4>{item.title}</h4> : null}
            {item?.text ? <p>{item.text}</p> : null}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function AbstractMediaCluster({ featured, secondary = [], className = "" }) {
  return (
    <div className={`abstract-media-cluster ${className}`.trim()}>
      <div className="abstract-media-cluster-orb abstract-media-cluster-orb-a" />
      <div className="abstract-media-cluster-orb abstract-media-cluster-orb-b" />
      <div className="abstract-media-cluster-grid">
        <MediaCard item={featured} featured />

        <div className="abstract-media-secondary-grid">
          {secondary.map((item) => (
            <MediaCard key={`${item.title}-${item.src || item.badge || item.type}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
