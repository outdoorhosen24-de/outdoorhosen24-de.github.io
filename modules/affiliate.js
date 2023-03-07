export default function (shopLink, config) {
    const partner = config.affiliatePartner;
    const params = config.affiliate[partner];

    var shopLink = shopLink;
    var url = new URL(shopLink);
    url.searchParams.append(params.affiliateParameter, params.affiliateTag)

    return url
  } 