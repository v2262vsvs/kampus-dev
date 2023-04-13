import React, { Suspense } from 'react';

import { cookies } from 'next/headers';

import { ContentCard } from '@components/ContentCard';
import { GridTable } from '@components/GridTable';
import Loading from '@components/Loader';

import { delay } from '@helpers/delay';
import { apiCallUser } from '@helpers/getUserInfo';

import styles from './styles.module.scss';
import { RightBoard } from '@components/RightBoard';
import { apiCallBoard } from '@helpers/getBoardData';

interface PageProps {}

export const dynamic = 'force-dynamic';
const Page: ({}: PageProps) => Promise<JSX.Element> = async ({}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  console.log('token', token)

  const { fullName } = await apiCallUser(token);
  const { data } = await apiCallBoard(token,1,4);



  await delay(1000);

  return (
    <div className={styles.dashboardContainer}>
      {/*<h1>Вітаємо, {fullName}</h1>*/}
      <div className={styles.mainContent}>
        <div className={styles.currentSemester}>
          <h3 className={styles.title}>Current semester</h3>
          <Suspense fallback={<Loading />}>
            {/*@ts-ignore*/}
            <GridTable data={delay(2000)} />
          </Suspense>
        </div>
        <div className={styles.news}>
          <RightBoard news={data}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
