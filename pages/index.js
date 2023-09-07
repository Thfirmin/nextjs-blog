import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import Date from '../components/date';

import { getSortedPostData } from '../lib/posts';

export default function Home({ allPostData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<hr/>
				<p>
					Hi! I'm Thiago Firmino dos Santos, aka <em>thino</em>, <em>tsukimichi</em> or even <em>thfirmin</em>.
					A brazilian black male, 22yo, cancerian and a <strong>{`<HumanCoder/>`}</strong>.
				</p>
				<p>
					I'm a anime, basketball, coffee, programming and music lover.
				</p>
				<br/>
				<p>
					(This is a sample website - you'll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<br/>
				<p>
					See my <Link href="/posts/first-post">First Post</Link>
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{
						allPostData.map(({ id, date, title }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/posts/${id}`}>
									{title ? title : 'Title Undefined'}
								</Link>
								<br/>
								<small className={utilStyles.lightText}>
									{date ? date : 'Undefined'}
								</small>
							</li>
						))
					}
				</ul>
			</section>
		</Layout>
	);  
}

export async function	getStaticProps() {
	const	allPostData = getSortedPostData();
	return ({
		props: {
			allPostData
		}
	});
}
 
