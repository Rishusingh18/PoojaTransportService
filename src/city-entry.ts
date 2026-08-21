import './index.css';
import '../Css/redesign.css';
import '../main.js';

// Preserve entrypoint chunk and CSS injection for all static and city pages
if (typeof window !== 'undefined') {
  (window as any).__poojaTransportLoaded = true;
}
