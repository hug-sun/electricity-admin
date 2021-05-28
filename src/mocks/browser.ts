// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { orderHandlers } from "./order/order";
import { products } from "./product/index";
import { users } from "./user/user";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  ...handlers,
  ...orderHandlers,
  ...products,
  ...users
);
