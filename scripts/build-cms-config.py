"""Generates public/admin/config.yml (the admin panel's form definitions).
Run: python3 scripts/build-cms-config.py  — edit here, not the YAML."""
import yaml

def S(name, label, hint=None, required=True, widget="string"):
    f = {"name": name, "label": label, "widget": widget}
    if hint: f["hint"] = hint
    if not required: f["required"] = False
    return f
T = lambda n, l, h=None, r=True: S(n, l, h, r, "text")
def IMG(name="image", label="Photo"):
    return {"name": name, "label": label, "widget": "image", "required": False,
            "hint": "Upload a JPG (landscape, about 1600 px wide, under 500 KB)."}
CAP = lambda name="imageCaption": S(name, "Photo note", "Shown in the grey box until a photo is uploaded.", False)
def OBJ(name, label, fields, collapsed=False):
    return {"name": name, "label": label, "widget": "object", "collapsed": collapsed, "fields": fields}
def LIST(name, label, fields=None, field=None, summary=None, hint=None):
    f = {"name": name, "label": label, "widget": "list"}
    if fields: f["fields"] = fields
    if field: f["field"] = field
    if summary: f["summary"] = summary
    if hint: f["hint"] = hint
    return f
STRLIST = lambda n, l, item: LIST(n, l, field=S("item", item))
PRICE = S("price", "Price (Rs)", "Numbers only, e.g. 8,500. Leave ____ if not decided.")
def HERO(img=True, body=True, title=True):
    f = [S("eyebrow", "Small gold label")]
    if title: f.append(S("title", "Main heading"))
    if body: f.append(T("body", "Intro text", r=False))
    if img: f += [IMG(), CAP()]
    return OBJ("hero", "Top section (hero)", f)
CTA = OBJ("cta", "Bottom booking banner", [S("title", "Heading"), T("body", "Text")], True)

def page(name, label, fields):
    return {"name": name, "label": label, "file": f"content/{name}.json", "fields": fields}

collections = [
  {"name": "pages", "label": "Pages", "editor": {"preview": False}, "files": [
    page("home", "Home page", [
      HERO(),
      S("offersTitle", "'What we offer' heading"),
      LIST("offers", "'What we offer' cards", summary="{{fields.title}}", fields=[
        S("title", "Title"), T("body", "Text"),
        {"name": "link", "label": "Button goes to", "widget": "select", "options": [
          {"label": "Rooms", "value": "/rooms/"}, {"label": "Weddings & Events", "value": "/weddings/"},
          {"label": "Dining", "value": "/dining/"}, {"label": "Gallery", "value": "/gallery/"},
          {"label": "About", "value": "/about/"}, {"label": "Contact", "value": "/contact/"}]},
        IMG(), CAP()]),
      OBJ("roomsSection", "Rooms section", [S("title", "Heading"), T("body", "Text")], True),
      OBJ("weddingsSection", "Weddings section", [S("title", "Heading"), T("body", "Text")], True),
      OBJ("diningSection", "Dining section", [S("title", "Heading"),
        LIST("photos", "Food photos (first 3 shown)", fields=[IMG(), S("caption", "Photo note")], summary="{{fields.caption}}")], True),
      LIST("reviews", "Guest reviews", summary="{{fields.author}}",
           hint="Copy REAL reviews from Google only.",
           fields=[T("quote", "Review text"), S("author", "Name", "e.g. Nimal P. · Google")]),
      S("locationTitle", "Location heading"),
    ]),
    page("rooms", "Rooms page", [
      HERO(img=False),
      LIST("rooms", "Rooms", summary="{{fields.name}} — Rs {{fields.price}}", fields=[
        S("name", "Room name"), S("sleeps", "Sleeps", "e.g. 2 guests"), S("details", "Features line"),
        PRICE, IMG(), CAP()]),
      STRLIST("amenities", "'In every room' list", "Item"),
      STRLIST("goodToKnow", "'Good to know' list", "Item"),
      CTA]),
    page("weddings", "Weddings & Events page", [
      HERO(),
      S("packagesTitle", "Packages heading"), T("packagesBody", "Packages intro"),
      LIST("packages", "Wedding packages", summary="{{fields.name}} — Rs {{fields.price}}", fields=[
        S("name", "Package name"), dict(PRICE, label="Price per head (Rs)"),
        {"name": "featured", "label": "Mark as 'Most popular' (also shown on Home page)", "widget": "boolean", "default": False, "required": False},
        STRLIST("includes", "What's included", "Item")]),
      STRLIST("hallDetails", "Hall details", "Detail"),
      STRLIST("eventTypes", "Event types", "Event"),
      LIST("celebrations", "Recent celebrations photos", fields=[IMG(), S("caption", "Photo note")], summary="{{fields.caption}}"),
      CTA]),
    page("dining", "Dining page & Menu", [
      OBJ("hero", "Top section", [S("eyebrow", "Small gold label"), T("body", "Intro text"),
        S("orderTypes", "Order options", "e.g. Dine in · Takeaway · Delivery"), IMG(), CAP()]),
      S("menuTitle", "Menu heading"),
      {"name": "menuTotalItems", "label": "Total items on full menu", "widget": "number", "value_type": "int"},
      LIST("menu", "Menu categories", summary="{{fields.category}}", fields=[
        S("category", "Category name"),
        LIST("items", "Dishes", summary="{{fields.name}} — Rs {{fields.price}}", fields=[
          S("name", "Dish"), PRICE,
          {"name": "featured", "label": "Show on Home page", "widget": "boolean", "default": False, "required": False}])]),
    ]),
    page("gallery", "Gallery page", [
      HERO(img=False),
      LIST("photos", "Photos", summary="{{fields.category}} — {{fields.caption}}", fields=[
        IMG(), S("caption", "Description"),
        {"name": "category", "label": "Tab", "widget": "select", "options": ["Rooms", "Weddings", "Dining", "Hotel"]}]),
    ]),
    page("about", "About & Location page", [
      HERO(img=False, body=False),
      T("story", "Our story", "Leave an empty line between paragraphs."),
      IMG("storyImage", "Story photo"), CAP("storyImageCaption"),
      OBJ("elo", "'Meet Elo' card", [S("title", "Heading"), T("body", "Text"), IMG("image", "Photo of Elo")]),
      S("locationTitle", "Location heading"), S("locationNote", "Location note"),
    ]),
    page("contact", "Contact page", [
      HERO(img=False),
      S("formTitle", "Form heading"), S("formNote", "Note under the button"),
      STRLIST("enquiryTopics", "'Enquiry about' options", "Option"),
    ]),
  ]},
  {"name": "settings", "label": "Hotel details & contact", "editor": {"preview": False}, "files": [
    {"name": "settings", "label": "Hotel details, phone, address, hours", "file": "content/settings.json", "fields": [
      S("name", "Hotel name"), S("restaurant", "Restaurant name"),
      T("description", "Short description (shown on Google)"),
      S("phoneDisplay", "Phone (as shown)", "e.g. 077 664 7648"),
      S("phoneIntl", "Phone (international)", "e.g. +94776647648"),
      S("whatsappNumber", "WhatsApp number", "Country code, no + or spaces, e.g. 94776647648"),
      S("whatsappDefaultMessage", "Default WhatsApp message"),
      S("email", "Email"),
      OBJ("address", "Address", [S("line1", "Building / name"), S("street", "Street", required=False),
        S("city", "Town"), S("region", "Province"), S("country", "Country")]),
      S("mapsUrl", "Google Maps link (Get directions)"),
      S("mapEmbed", "Google Maps embed link", "Usually leave as it is."),
      {"name": "ratingValue", "label": "Google rating", "widget": "number", "value_type": "float", "step": 0.1},
      {"name": "ratingCount", "label": "Number of Google reviews", "widget": "number", "value_type": "int"},
      S("restaurantHours", "Restaurant hours"),
      S("checkIn", "Check-in time"), S("checkOut", "Check-out time"),
      S("facebook", "Facebook page link", required=False),
      T("footerText", "Footer text"),
      LIST("nearby", "Nearby places", summary="{{fields.place}} — {{fields.distance}}",
           fields=[S("place", "Place"), S("distance", "Distance")]),
      S("url", "Website address", "Change only after the domain is bought, e.g. https://www.elaineforestview.lk"),
    ]}]},
]

import os
backend = {"name": "github", "repo": "Ireshaprabodhani/elaine-forest-view", "branch": "main",
           "commit_messages": {"update": "Content: update {{slug}} via admin panel"}}
# Email/password login: paste the `backend:` block that DecapBridge generates
# into scripts/cms-backend.yml and re-run this script. It replaces the GitHub login.
_override = os.path.join(os.path.dirname(__file__), "cms-backend.yml")
if os.path.exists(_override):
    _b = yaml.safe_load(open(_override))
    backend = _b.get("backend", _b)

config = {
  "backend": backend,
  "local_backend": True,
  "site_url": "https://www.elaineforestview.lk",
  "display_url": "https://www.elaineforestview.lk",
  "logo_url": "/admin/logo.svg",
  "media_folder": "public/images",
  "public_folder": "/images",
  "collections": collections,
}
with open("public/admin/config.yml", "w") as f:
    f.write("# GENERATED by scripts/build-cms-config.py — edit that file, then re-run it.\n")
    yaml.safe_dump(config, f, sort_keys=False, allow_unicode=True, width=200)
print("written")
