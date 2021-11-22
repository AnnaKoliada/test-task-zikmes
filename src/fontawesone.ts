import { dom, config, icon } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
config.keepOriginalSource = false;
config.autoReplaceSvg = true;
config.observeMutations = true;
export const icon1 = icon(faUser).html;
dom.watch();
