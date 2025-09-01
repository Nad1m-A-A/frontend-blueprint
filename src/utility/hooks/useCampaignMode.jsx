export default function useCampaignMode() {
  return location.pathname.startsWith("/campaign");
}
