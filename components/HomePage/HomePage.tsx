'use client';

import { useState } from 'react';
import { Match } from '@/lib/db/schema';
import Modal from '@/components/Modal/Modal';
import MatchForm from '@/components/match-form/match-form';
import MatchCard from '@/components/match-card/match-card';
import styles from './HomePage.module.css';

interface HomePageProps {
  initialMatches: Match[];
}

export default function HomePage({ initialMatches }: HomePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Match Tracker</h1>
          <p className={styles.subtitle}>Keep track of your connections</p>
        </div>
        <button
          className={styles.addButton}
          onClick={() => setIsModalOpen(true)}
        >
          <span className={styles.plusIcon}>+</span>
          Add Match
        </button>
      </header>

      {initialMatches.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>💝</div>
          <h2>No matches yet</h2>
          <p>Click the button above to add your first match!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {initialMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Match"
      >
        <MatchForm onSuccess={handleSuccess} />
      </Modal>
    </div>
  );
}
