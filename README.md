# ✅ Shopify Checkout Confidence Builder App

This app displays a customizable banner image during the checkout process to increase customer trust and improve conversion rates. The banner can be configured via the theme editor, including image URL, alt text, width, alignment, and visibility based on checkout steps.

![shopify checkout extension confidence banner](https://github.com/user-attachments/assets/02ad4d03-c4ea-4b39-9460-f215c7615d30)

---

## 🛠️ Extension Configuration (Shopify `shopify.extension.toml`)

```toml
name = "checkoutbanner"
type = "checkout_ui_extension"
api_version = "2025-01"

[[extensions]]
name = "checkoutbanner"
handle = "checkoutbanner"
type = "ui_extension"

[[extensions.targeting]]
module = "./src/Checkout.jsx"
target = "purchase.checkout.block.render"

[extensions.capabilities]
api_access = true

[extensions.settings]

# 🖼️ Image URL (merchant must paste a full image URL)
[[extensions.settings.fields]]
key = "bannerImage"
type = "single_line_text_field"
name = "Checkout banner image URL"
description = "Paste the full image URL to display at checkout"

# 📝 Alt Text for Accessibility
[[extensions.settings.fields]]
key = "bannerAlt"
type = "single_line_text_field"
name = "Image alt text"
description = "Accessibility text for screen readers"

# 📏 Max Width (pixels)
[[extensions.settings.fields]]
key = "maxWidth"
type = "number_integer"
name = "Max Width (px)"
description = "Optional: Set a maximum image width"

# 🧭 Alignment
[[extensions.settings.fields]]
key = "alignment"
type = "single_line_text_field"
name = "Banner alignment"
description = "Type left, center, or right"

# 🔀 Checkout Step Visibility
[[extensions.settings.fields]]
key = "showOnStep"
type = "single_line_text_field"
name = "Show on checkout step"
description = "Type all, information, shipping, or payment"
```

---

## ⚛️ React Extension Component (`src/Checkout.jsx`)

```jsx
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
```

---

## ✨ Features

- Upload a banner image via settings
- Custom alt text for accessibility
- Optional max-width for responsive design
- Align the image left, center, or right
- Choose which checkout step(s) to display the banner on

---

## ✅ Use Cases

- Build trust with security badges
- Reassure with return policy highlights
- Promote seasonal offers or guarantees

Let me know if you want to expand this app with text blocks, CTA buttons, or dynamic messages based on the cart!
