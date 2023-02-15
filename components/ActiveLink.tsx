import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = (props: { text: string, href: string }) => {

  const { asPath } = useRouter();

  return (
      <Link href={ props.href } style={ asPath === props.href ? style : undefined }>
        { props.text }
      </Link>
  );
}