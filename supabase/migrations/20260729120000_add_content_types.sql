alter table public.news_articles
    add column if not exists content_type text not null default 'news',
    add column if not exists reading_time integer;

alter table public.news_articles
    drop constraint if exists news_articles_content_type_check;

alter table public.news_articles
    add constraint news_articles_content_type_check
    check (content_type in ('news', 'insight'));

alter table public.news_articles
    drop constraint if exists news_articles_reading_time_check;

alter table public.news_articles
    add constraint news_articles_reading_time_check
    check (reading_time is null or reading_time > 0);

create index if not exists news_articles_type_status_published_idx
    on public.news_articles (content_type, status, published_at desc);

create or replace view public.news_sitemap as
select
    case
        when content_type = 'insight'
            then 'https://smaj.org/insights/article/?slug=' || slug
        else 'https://smaj.org/news/' || slug || '/'
    end as loc,
    coalesce(updated_at, published_at, created_at) as lastmod
from public.news_articles
where status = 'published';
