'use client';

import { useState, useRef } from 'react';
import { createMatch } from '@/lib/actions';
import styles from './match-form.module.css';

interface MatchFormProps {
  onSuccess: () => void;
}

export default function MatchForm({ onSuccess }: MatchFormProps) {
  const [loading, setLoading] = useState(false);
  // const [images, setImages] = useState<string[]>([]);
  // const [videos, setVideos] = useState<string[]>([]);
  // const [uploading, setUploading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // const handleFileUpload = async (files: FileList | null, type: 'image' | 'video') => {
  //   if (!files || files.length === 0) return;

  //   setUploading(true);
  //   const uploadedUrls: string[] = [];

  //   for (const file of Array.from(files)) {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     try {
  //       const response = await fetch('/api/upload', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         uploadedUrls.push(data.url);
  //       }
  //     } catch (error) {
  //       console.error('Upload failed:', error);
  //     }
  //   }

  //   if (type === 'image') {
  //     setImages((prev) => [...prev, ...uploadedUrls]);
  //   } else {
  //     setVideos((prev) => [...prev, ...uploadedUrls]);
  //   }

  //   setUploading(false);
  // };

  // const removeMedia = (url: string, type: 'image' | 'video') => {
  //   if (type === 'image') {
  //     setImages((prev) => prev.filter((u) => u !== url));
  //   } else {
  //     setVideos((prev) => prev.filter((u) => u !== url));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await createMatch({
        name: formData.get('name') as string,
        // whatsappUrl: formData.get('whatsappUrl') as string || null,
        // telegramUrl: formData.get('telegramUrl') as string || null,
        // rating: parseInt(formData.get('rating') as string) || 5,
        // notes: formData.get('notes') as string || null,
        // images,
        // videos,
      });

      formRef.current?.reset();
      // setImages([]);
      // setVideos([]);
      onSuccess();
    } catch (error) {
      console.error('Failed to create match:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Person Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter name"
        />
      </div>

      {/* <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="whatsappUrl">WhatsApp</label>
          <input
            type="text"
            id="whatsappUrl"
            name="whatsappUrl"
            placeholder="Number or URL"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="telegramUrl">Telegram</label>
          <input
            type="text"
            id="telegramUrl"
            name="telegramUrl"
            placeholder="Username or URL"
          />
        </div>
      </div> */}

      {/* <div className={styles.field}>
        <label htmlFor="rating">Rating (1-10)</label>
        <input
          type="range"
          id="rating"
          name="rating"
          min="1"
          max="10"
          defaultValue="5"
          className={styles.rangeInput}
        />
        <div className={styles.rangeLabels}>
          <span>1</span>
          <span>5</span>
          <span>10</span>
        </div>
      </div> */}

      {/* <div className={styles.field}>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Add any notes or comments..."
        />
      </div> */}

      {/* <div className={styles.field}>
        <label>Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFileUpload(e.target.files, 'image')}
          className={styles.fileInput}
        />
        {images.length > 0 && (
          <div className={styles.mediaPreview}>
            {images.map((url) => (
              <div key={url} className={styles.mediaItem}>
                <img src={url} alt="Preview" />
                <button
                  type="button"
                  onClick={() => removeMedia(url, 'image')}
                  className={styles.removeButton}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* <div className={styles.field}>
        <label>Videos</label>
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={(e) => handleFileUpload(e.target.files, 'video')}
          className={styles.fileInput}
        />
        {videos.length > 0 && (
          <div className={styles.mediaPreview}>
            {videos.map((url) => (
              <div key={url} className={styles.mediaItem}>
                <video src={url} controls />
                <button
                  type="button"
                  onClick={() => removeMedia(url, 'video')}
                  className={styles.removeButton}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* {uploading && <p className={styles.uploading}>Uploading files...</p>} */}

      <button
        type="submit"
        disabled={loading}
        // disabled={loading || uploading}
        className={styles.submitButton}
      >
        {loading ? 'Creating...' : 'Create Match'}
      </button>
    </form>
  );
}
