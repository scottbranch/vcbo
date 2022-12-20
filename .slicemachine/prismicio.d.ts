// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About Page documents */
interface AboutPageDocumentData {
    /**
     * Title Text field in *About Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.title_text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title_text: prismicT.TitleField;
    /**
     * Featured Image field in *About Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.featured_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featured_image: prismicT.ImageField<never>;
    /**
     * Text Blurb 1 field in *About Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_1[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_1: prismicT.GroupField<Simplify<AboutPageDocumentDataTextBlurb1Item>>;
    /**
     * Text Blurb 2 field in *About Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_2[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_2: prismicT.GroupField<Simplify<AboutPageDocumentDataTextBlurb2Item>>;
    /**
     * Featured Image 2 field in *About Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.featured_image_2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featured_image_2: prismicT.ImageField<never>;
    /**
     * Text Blurb 3 field in *About Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_3[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_3: prismicT.GroupField<Simplify<AboutPageDocumentDataTextBlurb3Item>>;
    /**
     * Leadership field in *About Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.leadership[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    leadership: prismicT.GroupField<Simplify<AboutPageDocumentDataLeadershipItem>>;
}
/**
 * Item in About Page → Text Blurb 1
 *
 */
export interface AboutPageDocumentDataTextBlurb1Item {
    /**
     * Title field in *About Page → Text Blurb 1*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_1[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraph field in *About Page → Text Blurb 1*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_1[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
}
/**
 * Item in About Page → Text Blurb 2
 *
 */
export interface AboutPageDocumentDataTextBlurb2Item {
    /**
     * Title field in *About Page → Text Blurb 2*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_2[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraph field in *About Page → Text Blurb 2*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_2[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
}
/**
 * Item in About Page → Text Blurb 3
 *
 */
export interface AboutPageDocumentDataTextBlurb3Item {
    /**
     * Title field in *About Page → Text Blurb 3*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_3[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraph field in *About Page → Text Blurb 3*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.text_blurb_3[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
}
/**
 * Item in About Page → Leadership
 *
 */
export interface AboutPageDocumentDataLeadershipItem {
    /**
     * Headshot field in *About Page → Leadership*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.leadership[].headshot
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    headshot: prismicT.ImageField<never>;
    /**
     * Name field in *About Page → Leadership*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.leadership[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Title field in *About Page → Leadership*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.leadership[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Paragraph field in *About Page → Leadership*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_page.leadership[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
}
/**
 * About Page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AboutPageDocumentData>, "about_page", Lang>;
/** Content for Additional Project documents */
interface AdditionalProjectDocumentData {
    /**
     * Sector field in *Additional Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.sector
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    sector: prismicT.RelationField<"sector">;
    /**
     * Specialty field in *Additional Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.specialty
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    specialty: prismicT.RelationField<"specialty">;
    /**
     * Name field in *Additional Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Location field in *Additional Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    location: prismicT.RichTextField;
    /**
     * Sq Ft field in *Additional Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.sq_ft
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sq_ft: prismicT.RichTextField;
    /**
     * Client field in *Additional Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.client
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    client: prismicT.RichTextField;
    /**
     * Images field in *Additional Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.images[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    images: prismicT.GroupField<Simplify<AdditionalProjectDocumentDataImagesItem>>;
}
/**
 * Item in Additional Project → Images
 *
 */
export interface AdditionalProjectDocumentDataImagesItem {
    /**
     * Image field in *Additional Project → Images*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: additional_project.images[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Additional Project document from Prismic
 *
 * - **API ID**: `additional_project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AdditionalProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AdditionalProjectDocumentData>, "additional_project", Lang>;
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Hero Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.hero_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Content field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Heading field in *Homepage*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Carousel field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.carousel[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    carousel: prismicT.GroupField<Simplify<HomepageDocumentDataCarouselItem>>;
    /**
     * Text Blurb 1 field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_1[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_1: prismicT.GroupField<Simplify<HomepageDocumentDataTextBlurb1Item>>;
    /**
     * Text Blurb 2 field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_2: prismicT.GroupField<Simplify<HomepageDocumentDataTextBlurb2Item>>;
    /**
     * Text Blurb 3 field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_3[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_3: prismicT.GroupField<Simplify<HomepageDocumentDataTextBlurb3Item>>;
    /**
     * Text Blurb 4 field in *Homepage*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb_4: prismicT.GroupField<Simplify<HomepageDocumentDataTextBlurb4Item>>;
}
/**
 * Item in Homepage → Carousel
 *
 */
export interface HomepageDocumentDataCarouselItem {
    /**
     * Image field in *Homepage → Carousel*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.carousel[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Item in Homepage → Text Blurb 1
 *
 */
export interface HomepageDocumentDataTextBlurb1Item {
    /**
     * Title field in *Homepage → Text Blurb 1*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_1[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraph field in *Homepage → Text Blurb 1*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_1[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
    /**
     * Link field in *Homepage → Text Blurb 1*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_1[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Link Text field in *Homepage → Text Blurb 1*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_1[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link_text: prismicT.RichTextField;
}
/**
 * Item in Homepage → Text Blurb 2
 *
 */
export interface HomepageDocumentDataTextBlurb2Item {
    /**
     * Title field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Small Image field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].small_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    small_image: prismicT.ImageField<never>;
    /**
     * Large Image field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].large_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    large_image: prismicT.ImageField<never>;
    /**
     * Paragraph field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
    /**
     * Link field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Link Text field in *Homepage → Text Blurb 2*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_2[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link_text: prismicT.RichTextField;
}
/**
 * Item in Homepage → Text Blurb 3
 *
 */
export interface HomepageDocumentDataTextBlurb3Item {
    /**
     * Full Width Image field in *Homepage → Text Blurb 3*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_3[].full_width_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    full_width_image: prismicT.ImageField<never>;
    /**
     * Title field in *Homepage → Text Blurb 3*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_3[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Link field in *Homepage → Text Blurb 3*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_3[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Link Text field in *Homepage → Text Blurb 3*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_3[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link_text: prismicT.RichTextField;
}
/**
 * Item in Homepage → Text Blurb 4
 *
 */
export interface HomepageDocumentDataTextBlurb4Item {
    /**
     * Title field in *Homepage → Text Blurb 4*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Paragraph field in *Homepage → Text Blurb 4*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
    /**
     * Image field in *Homepage → Text Blurb 4*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Link field in *Homepage → Text Blurb 4*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Link Text field in *Homepage → Text Blurb 4*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.text_blurb_4[].link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link_text: prismicT.RichTextField;
}
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Sector field in *Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.sector
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    sector: prismicT.RelationField<"sector">;
    /**
     * Specialty field in *Project*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: project.specialty
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    specialty: prismicT.RelationField<"specialty">;
    /**
     * Name field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Client field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.client
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    client: prismicT.RichTextField;
    /**
     * Project Location field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.project_location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    project_location: prismicT.RichTextField;
    /**
     * Sq Ft field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.sq_ft
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sq_ft: prismicT.RichTextField;
    /**
     * Headline field in *Project*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: project.headline
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    headline: prismicT.TitleField;
    /**
     * Hero Image field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.hero_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Text Blurb field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.text_blurb[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    text_blurb: prismicT.GroupField<Simplify<ProjectDocumentDataTextBlurbItem>>;
    /**
     * Content Image 1 field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content_image_1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    content_image_1: prismicT.ImageField<never>;
    /**
     * Image Carousel field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.image_carousel[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    image_carousel: prismicT.GroupField<Simplify<ProjectDocumentDataImageCarouselItem>>;
    /**
     * Hero Image 2 field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.hero_image_2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image_2: prismicT.ImageField<never>;
    /**
     * Quote field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.quote[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    quote: prismicT.GroupField<Simplify<ProjectDocumentDataQuoteItem>>;
    /**
     * Content Image 2 field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content_image_2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    content_image_2: prismicT.ImageField<never>;
    /**
     * Content Image 3 field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.content_image_3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    content_image_3: prismicT.ImageField<never>;
    /**
     * Concluding Statement field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.concluding_statement
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    concluding_statement: prismicT.RichTextField;
}
/**
 * Item in Project → Text Blurb
 *
 */
export interface ProjectDocumentDataTextBlurbItem {
    /**
     * Heading field in *Project → Text Blurb*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.text_blurb[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
    /**
     * Paragraph field in *Project → Text Blurb*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.text_blurb[].paragraph
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    paragraph: prismicT.RichTextField;
}
/**
 * Item in Project → Image Carousel
 *
 */
export interface ProjectDocumentDataImageCarouselItem {
    /**
     * Image field in *Project → Image Carousel*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.image_carousel[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Item in Project → Quote
 *
 */
export interface ProjectDocumentDataQuoteItem {
    /**
     * Quote Text field in *Project → Quote*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.quote[].quote_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote_text: prismicT.RichTextField;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Projects Page documents */
interface ProjectsPageDocumentData {
    /**
     * Slice Zone field in *Projects Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: projects_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ProjectsPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Projects Page → Slice Zone*
 *
 */
type ProjectsPageDocumentDataSlicesSlice = FeaturedProjectsSlice;
/**
 * Projects Page document from Prismic
 *
 * - **API ID**: `projects_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectsPageDocumentData>, "projects_page", Lang>;
/** Content for Sector documents */
interface SectorDocumentData {
    /**
     * Order field in *Sector*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: sector.order
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    order: prismicT.NumberField;
    /**
     * Name field in *Sector*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sector.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Description field in *Sector*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sector.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Slice Zone field in *Sector*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: sector.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SectorDocumentDataSlicesSlice>;
}
/**
 * Slice for *Sector → Slice Zone*
 *
 */
type SectorDocumentDataSlicesSlice = SpecialtiesSlice;
/**
 * Sector document from Prismic
 *
 * - **API ID**: `sector`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SectorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SectorDocumentData>, "sector", Lang>;
/** Content for Specialty documents */
interface SpecialtyDocumentData {
    /**
     * Name field in *Specialty*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: specialty.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
}
/**
 * Specialty document from Prismic
 *
 * - **API ID**: `specialty`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SpecialtyDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SpecialtyDocumentData>, "specialty", Lang>;
export type AllDocumentTypes = AboutPageDocument | AdditionalProjectDocument | ArticleDocument | HomepageDocument | ProjectDocument | ProjectsPageDocument | SectorDocument | SpecialtyDocument;
/**
 * Item in FeaturedProjects → Items
 *
 */
export interface FeaturedProjectsSliceDefaultItem {
    /**
     * Project field in *FeaturedProjects → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: featured_projects.items[].project
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project: prismicT.RelationField<"project">;
}
/**
 * Default variation for FeaturedProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FeaturedProjects`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturedProjectsSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<FeaturedProjectsSliceDefaultItem>>;
/**
 * Slice variation for *FeaturedProjects*
 *
 */
type FeaturedProjectsSliceVariation = FeaturedProjectsSliceDefault;
/**
 * FeaturedProjects Shared Slice
 *
 * - **API ID**: `featured_projects`
 * - **Description**: `FeaturedProjects`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturedProjectsSlice = prismicT.SharedSlice<"featured_projects", FeaturedProjectsSliceVariation>;
/**
 * Item in Specialties → Items
 *
 */
export interface SpecialtiesSliceDefaultItem {
    /**
     * Specialty field in *Specialties → Items*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: specialties.items[].specialty
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    specialty: prismicT.RelationField<"specialty">;
}
/**
 * Default variation for Specialties Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Specialties`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpecialtiesSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<SpecialtiesSliceDefaultItem>>;
/**
 * Slice variation for *Specialties*
 *
 */
type SpecialtiesSliceVariation = SpecialtiesSliceDefault;
/**
 * Specialties Shared Slice
 *
 * - **API ID**: `specialties`
 * - **Description**: `Specialties`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SpecialtiesSlice = prismicT.SharedSlice<"specialties", SpecialtiesSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutPageDocumentData, AboutPageDocumentDataTextBlurb1Item, AboutPageDocumentDataTextBlurb2Item, AboutPageDocumentDataTextBlurb3Item, AboutPageDocumentDataLeadershipItem, AboutPageDocument, AdditionalProjectDocumentData, AdditionalProjectDocumentDataImagesItem, AdditionalProjectDocument, ArticleDocumentData, ArticleDocument, HomepageDocumentData, HomepageDocumentDataCarouselItem, HomepageDocumentDataTextBlurb1Item, HomepageDocumentDataTextBlurb2Item, HomepageDocumentDataTextBlurb3Item, HomepageDocumentDataTextBlurb4Item, HomepageDocument, ProjectDocumentData, ProjectDocumentDataTextBlurbItem, ProjectDocumentDataImageCarouselItem, ProjectDocumentDataQuoteItem, ProjectDocument, ProjectsPageDocumentData, ProjectsPageDocumentDataSlicesSlice, ProjectsPageDocument, SectorDocumentData, SectorDocumentDataSlicesSlice, SectorDocument, SpecialtyDocumentData, SpecialtyDocument, AllDocumentTypes, FeaturedProjectsSliceDefaultItem, FeaturedProjectsSliceDefault, FeaturedProjectsSliceVariation, FeaturedProjectsSlice, SpecialtiesSliceDefaultItem, SpecialtiesSliceDefault, SpecialtiesSliceVariation, SpecialtiesSlice };
    }
}
