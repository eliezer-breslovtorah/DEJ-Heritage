# DEJ International Heritage Foundation

The static site is in `docs/`. It uses plain HTML, CSS, and JavaScript. The homepage photograph and Roboto font files are served locally. The public sitemap listed `/home`, which serves the same content as `/`. The Squarespace system cart at `/cart` contained no products and is preserved as an empty-cart page. The source's default Squarespace favicon and platform scripts were omitted.

## Publish and review

1. Open **Settings → Pages** for this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**. Select **main**, then **/docs**, then **Save**. GitHub Pages hosting is free for this public repository.
3. Once GitHub reports a successful deployment, open the Pages URL shown in Settings. The expected address is `https://eliezer-breslovtorah.github.io/DEJ-Heritage/`.
4. Check the home page and photo, title link, `home/` and `cart/` at the end of the preview URL, and the contact form on desktop and a phone. Keep the existing site live until the preview is approved and contact delivery has been verified.

For local testing, run `python3 -m http.server 8000 --directory docs` and open `http://localhost:8000/`.

## Contact form

GitHub Pages serves static files. To deliver contact messages, configure an HTTPS form endpoint supporting cross-origin POSTs with form data and JSON responses, such as a Formspree form owned by the foundation. Set and verify the recipient with the provider and enable its spam controls. Put the public endpoint in the contact form's `data-endpoint` attribute in both `docs/index.html` and `docs/home/index.html`. Keep credentials out of the repository.

The preview displays a status explaining that delivery is disconnected. After connecting the endpoint, submit a labeled test from the Pages preview and confirm the intended inbox receives all four fields. The cart mirrors the observed empty state and has no checkout. Any future live checkout would need a separate payment service.

## Connect dejheritage.org after approval

1. Save a copy of the existing DNS web records so the live site can be restored if needed. Keep Squarespace active. In the GitHub owner account settings, open **Pages** and add `dejheritage.org` for domain verification. Add the verification TXT record GitHub gives you at your DNS provider, then finish verification in GitHub.
2. In this repository's **Settings → Pages**, save `dejheritage.org` as the **Custom domain** before changing the site's DNS.
3. At the DNS provider, replace the old web records for the apex and `www` with the records below. Preserve mail, verification, and unrelated records. Remove any old apex AAAA records pointing to the previous web host if they exist.

| Type | Name | Value |
| --- | --- | --- |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `eliezer-breslovtorah.github.io` |

4. After DNS updates and GitHub issues the certificate, turn on **Enforce HTTPS** in Pages settings. Check both domain names, home and cart routes, images, and a labeled contact test. GitHub redirects the configured `www` variant to the apex domain.
5. If a cutover problem requires rollback, restore the saved web DNS records and verify delivery on Squarespace. Keep any subscription decision separate from cutover and confirm the domain registration and email arrangements before canceling website hosting.

[GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
