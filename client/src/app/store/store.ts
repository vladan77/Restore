import { legacy_createStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/contact/counterReducer";

export function configureTheStore() {
  // Placeholder for store configuration
  return legacy_createStore(counterReducer);
}