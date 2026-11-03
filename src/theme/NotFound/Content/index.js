/**
 * The ES 404 page (Atlas 2), the same design as every other ES app's error pages
 * (es-labs/es-errors). Rendered inside the Docusaurus layout, so the navbar and launcher stay.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import '@site/static/es-error.css';

const tries = [
  ['Check the address', ' for a typo.'],
  ['Search the docs', ' with the search box at the top.'],
  ['Start from the introduction', '; every guide is linked from there.'],
];

export default function NotFoundContent() {
  const {pathname} = useLocation();
  return (
    <div className="ee ee-embed" data-kind="lost">
      <div className="ee-wrap">
        <main className="ee-grid">
          <section className="ee-tile ee-lead" aria-labelledby="ee-title">
            <p className="ee-mono">Error 404 · Not found</p>
            <div className="ee-code" aria-hidden="true"><span>4</span><span>0</span><span>4</span></div>
            <div>
              <h1 id="ee-title">Nothing lives here</h1>
              <p className="ee-lede">The link may be old, mistyped, or the page has moved somewhere new in the docs.</p>
              <div className="ee-actions">
                <Link className="ee-btn primary" to="/">Go to the docs</Link>
              </div>
            </div>
          </section>
          <section className="ee-tile ee-try" aria-label="What you can try">
            <p className="ee-mono">What you can try</p>
            <ol>{tries.map(([b, rest]) => <li key={b}><span><b>{b}</b>{rest}</span></li>)}</ol>
          </section>
          <section className="ee-tile ee-status" aria-label="Status">
            <p className="ee-mono"><span className="ee-dot" />Status</p>
            <strong>404 Not found</strong>
            <span className="ee-path">{pathname}</span>
          </section>
        </main>
      </div>
    </div>
  );
}
