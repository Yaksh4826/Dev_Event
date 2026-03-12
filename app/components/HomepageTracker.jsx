"use client";
import { useEffect } from "react";
import posthog from "posthog-js";

export default function HomepageTracker() {
  useEffect(() => {
    posthog.capture("homepage_viewed");
  }, []);
  return null;
}
