import {
	useEffect,
	useLayoutEffect,
} from "react";

import { isBrowser } from "./browser";

export const useIsomorphicLayoutEffect =
	isBrowser
		? useLayoutEffect
		: useEffect;
