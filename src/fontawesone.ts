import { library, dom, config } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;
config.keepOriginalSource = false;
config.autoReplaceSvg = true;
config.observeMutations = true;
import { faUser } from '@fortawesome/free-solid-svg-icons'
export const icon1 = icon(faUser).html
// this is the 100% working way (deep imports)
// import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
// import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

// // this is the treeshaking way (better, but read about it below)
// import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

// library.add(faUser, faHome, faFacebook, faYoutube);
dom.watch();
