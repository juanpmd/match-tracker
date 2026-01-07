import { Match } from '@/lib/db/schema';
import styles from './MatchCard.module.css';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const images = match.images || [];
  const videos = match.videos || [];
  const hasMedia = images.length > 0 || videos.length > 0;

  return (
    <div className={styles.card}>
      {hasMedia && (
        <div className={styles.media}>
          {images.length > 0 && (
            <img src={images[0]} alt={match.personName} className={styles.mainImage} />
          )}
          {images.length === 0 && videos.length > 0 && (
            <video src={videos[0]} className={styles.mainImage} controls />
          )}
          {images.length > 1 && (
            <span className={styles.mediaCount}>+{images.length - 1}</span>
          )}
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{match.personName}</h3>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>{match.rating}</span>
            <span className={styles.ratingMax}>/10</span>
          </div>
        </div>

        <div className={styles.contacts}>
          {match.whatsappUrl && (
            <a
              href={match.whatsappUrl.startsWith('http') ? match.whatsappUrl : `https://wa.me/${match.whatsappUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon}>📱</span>
              WhatsApp
            </a>
          )}
          {match.telegramUrl && (
            <a
              href={match.telegramUrl.startsWith('http') ? match.telegramUrl : `https://t.me/${match.telegramUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon}>✈️</span>
              Telegram
            </a>
          )}
        </div>

        {match.notes && (
          <p className={styles.notes}>{match.notes}</p>
        )}

        <div className={styles.footer}>
          <span className={styles.date}>
            {new Date(match.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
