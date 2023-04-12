import { FC } from 'react';

import Link from 'next/link';

import { Card } from '@components/Card';

import styles from './styles.module.scss';

interface SubjectCardProps {
  href?: string;
  subject: Lesson;
}

const SubjectCard: FC<SubjectCardProps> = ({ href, subject }) => {
  return (
    <Link href={`/${href}`}>
      <Card>
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              {subject.name || 'Lorem ipsum dolor sit amet'}
            </div>
            <div className={styles.description}>
              {subject.teacher ||
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nobis!'}
            </div>
          </div>
          <div>
            <div className={styles.description}>
              {subject.total ||
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nobis!'}
            </div>
            <progress max='100' value={subject.total} />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export { SubjectCard };
