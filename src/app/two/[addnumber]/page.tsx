import React from 'react'
import notFound from '../../not-found';
import styles from "../../page.module.css";
import Link from "next/link";

type Props   = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: {
  params: Promise<{addnumber:string}>
}) {
  const id = await params
  const currentId = parseInt(id.addnumber, 10);

   console.log("saiaii" , id)

  if (isNaN(currentId) || currentId < 1 || currentId > 100) {
    // return notFound();
    return <>
    <h1> iss is currentid
      </h1></>;

  }

  const nextId1 = currentId + 1;
  const nextId2 = currentId + 2;

  const isLastScreen = currentId >= 99;
  return (
    <div className={styles.page}>
    <h1 className="text-3xl font-bold mb-4">Screen {nextId1}</h1>

    {!isLastScreen ? (
      <div className={styles.secounddiv}>
        {nextId1 <= 100 && (
          <Link href={`/two/${nextId1+1}`} className="text-blue-600 underline">
            Go to Screen {nextId1+1}saii
          </Link>
        )}
        {nextId2 <= 100 && (
          <Link href={`/two/${nextId2+1}`} className="text-blue-600 underline">
            Go to Screen {nextId2+1}
          </Link>
        )}
      </div>
    ) : (
      <Link href="/" className="text-green-600 underline">
        Go to Home
      </Link>
    )}
  </div>
  )
}
