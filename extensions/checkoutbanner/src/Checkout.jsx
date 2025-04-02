

import {
  reactExtension,
  useSettings,
  Image
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension('purchase.checkout.block.render', () => <CheckoutBanner />);

function CheckoutBanner() {
  const { bannerImage } = useSettings();

  if (!bannerImage) return null;

  return <Image source={bannerImage} description="Checkout banner image" />;
}
