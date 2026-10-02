/**
 * Central Event Configuration for PROMPTWARS 2026
 * 
 * Edit this single file to update key dates, timing, URLs, and event metadata.
 */

export interface EventConfig {
  eventName: string;
  eventEdition: string;
  caseName: string;
  tagline: string;
  challengeDate: string; // ISO format: YYYY-MM-DD
  challengeDateDisplay: string;
  challengeStartTime: string | null; // e.g. "2026-10-02T10:00:00+05:30" or null if unannounced
  challengeDurationHours: number;
  mode: string;
  participationType: string;
  challengePdfUrl: string; // URL to the official briefing document. Empty until published.
  submissionUrl: string; // URL to participant submission form. Empty until published.
  caseSummary: string;
  fictionalDisclaimer: string;
}

export const eventConfig: EventConfig = {
  eventName: "PROMPTWARS",
  eventEdition: "2026",
  caseName: "NOVA CART",
  tagline: "PROMPT. DISCOVER. BUILD. PROVE.",
  challengeDate: "2026-10-02",
  challengeDateDisplay: "02 October 2026",
  challengeStartTime: null, // Note: Exact start time has not been announced. Keep null as per brief.
  challengeDurationHours: 3,
  mode: "Online",
  participationType: "Individual",
  // Leave empty until official links are deployed:
  challengePdfUrl: "",
  submissionUrl: "",
  caseSummary:
    "NOVA CART is a fictional quick-commerce and local shopping platform connecting customers with hundreds of local retailers across three Indian cities.",
  fictionalDisclaimer:
    "NOVA CART is a fictional business case created strictly for the PromptWars Business Rescue Challenge.",
};
