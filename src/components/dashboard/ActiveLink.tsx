import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren, useState, useEffect } from 'react';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
  order: number;
};

export default function ActiveLink({
  children,
  activeClassName,
  className,
  order,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const { isReady, pathname } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      const href = props.href as string;
      const linkPathname = href.split('/')[order];

      const activePathname = pathname.split('/')[order];

      const newClassName = linkPathname === activePathname ? `${className} ${activeClassName}`.trim() : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [isReady, props.href, activeClassName, className, computedClassName]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
}
