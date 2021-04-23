// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { orderHandlers } from "./order/order";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers, ...orderHandlers);
