# WONDER — Hybrid Edition (Next.js 16 + Tailwind CSS 4)

Полностью пересобранная версия интерьерного сайта WONDER. Это **новый проект с Tailwind CSS 4**, а не исходная HTML-страница, помещённая в React.

## Стек

- Next.js 16, **App Router**, React 19, TypeScript (strict)
- Tailwind CSS 4 + `@tailwindcss/postcss`, **без `tailwind.config.js`**
- `next/image` для локальных WebP-фотографий
- Server Components для статичных секций, client components — только для интерактивности
- ESLint + TypeScript

## Запуск

Требуется Node.js 20.9+ (рекомендуется современная LTS-версия).

```bash
npm install
npm run dev
```

Откройте **http://localhost:3000**. Для проверки:

```bash
npm run typecheck
npm run lint
npm run build
```

Установка пакетов и полноценный production build **не были выполнены в среде подготовки архива**: DNS для registry.npmjs.org был недоступен (`EAI_AGAIN`). Синтаксис TSX, локальные импорты и изображения проверены; выборочные Tailwind-классы скомпилированы локальным Tailwind 4.

## Структура

```text
src/
  app/
    layout.tsx                 SEO, метаданные и корневой layout
    page.tsx                   Порядок блоков главной страницы
    globals.css                @import Tailwind + @theme и несколько global resets
  components/
    layout/
      Header.tsx               Адаптивная навигация
      Footer.tsx               Крупный wordmark WONDER
    sections/
      Hero.tsx
      ServiceStrip.tsx
      Studio.tsx               Светлый блок «01 / THE STUDIO» из Edition 04
      InteriorStudies.tsx
      Materials.tsx
      Approach.tsx
      Philosophy.tsx
      ServiceDetails.tsx
      Contact.tsx
    ui/
      ExperienceProvider.tsx   React-состояния окон и услуг
      ProjectDialog.tsx        Галерея, клавиши ← →
      ContactDialog.tsx        Клиентский черновик заявки
      ModalShell.tsx           React-портал, backdrop, Escape, focus trap
      SectionRule.tsx          Общий компонент разделителя
  data/content.ts             Проекты, услуги, навигация, этапы работы
public/images/                Все изображения WebP
```

## Как менять дизайн

**Цвета меняются в `src/app/globals.css` — блок `@theme`:**

```css
--color-forest: #19251f;    /* полоса четырёх услуг + контакт */
--color-editorial: #343a34; /* тёмный фон галереи Interior Studies */
--color-sand: #e8e5dd;      /* Materials & Details */
--color-footer: #202720;    /* футер */
```

В секциях используются классы вроде `bg-editorial`, `bg-forest`, `font-editorial`. Чтобы сделать полосу услуг светлой, поменяйте `bg-forest` в `src/components/sections/ServiceStrip.tsx` на `bg-sand`, **а также** светлый текст, границы и стрелки на тёмные. Глобальную палитру `forest` для этого менять не нужно: она используется и в Contact.

Контент и подписи проектов находятся в `src/data/content.ts`. Порядок секций — в `src/app/page.tsx`.

### Утверждённая композиция

1. Hero — классический светлый экран из Final Materials
2. ServiceStrip — тёмно-зелёная полоса четырёх услуг
3. **01 / THE STUDIO** — светлый вводный блок из Edition 04 между двумя тёмными секциями
4. **02 / INTERIOR STUDIES** — асимметричная тёмная галерея из Edition 04
5. Materials & Details — три фотографии
6. Our Approach — четыре этапа
7. Philosophy — композиция Edition 04 с дополненным текстом; якорь `#philosophy`
8. Service Details — раскрывающиеся услуги
9. Contact — «05 / START A CONVERSATION» (Edition 04, круглая кнопка)
10. Footer — большой логотип из Edition 04

### Важно: контактная форма

Форма **не отправляет** заявки. Это прототип: при отправке она формирует текст обращения, копирует его в буфер обмена и при запрете доступа к буферу показывает поле для ручного копирования. Для настоящей отправки понадобится отдельный backend/API route и защита от спама. Никакой скрытой отправки не настроено.

Фотографии Interior Studies обозначены как концептуальные изображения, а не реализованные клиентские объекты.

### Изображения и шрифты

Все изображения локальные, не требуют внешних URL. Фирменная антиква оставлена как семейство `GFS Didot` с запасными `Times New Roman` и `Georgia`, как в исходном HTML; в архив не вложены лицензируемые файлы шрифтов. При публикации можно подключить лицензированный шрифт через `next/font/local`.


## Изменения в этой версии

- Вернули **01 / THE STUDIO** из Edition 04 с оригинальными заголовком и текстом. Блок расположен между тёмной полосой услуг и тёмной галереей, ссылка «Studio» в меню ведёт к нему (`#studio`). Philosophy теперь использует отдельный идентификатор `#philosophy`.
- В аккордеоне заменили типографский знак `+` на **два центрированных CSS-штриха**: при раскрытии они плавно поворачиваются на 45° без смещения. Убрали разницу внутренних отступов между закрытым и открытым состояниями.
- В Interior Studies изображение увеличивается **плавно за 650 мс**. В Tailwind CSS 4 `scale` — отдельное CSS-свойство, поэтому для анимации теперь явно указаны `transition-[scale,filter]` и кривая сглаживания.
- Самостоятельный HTML-предпросмотр с этими изменениями: `WONDER-studio-update-preview.html` (поставляется отдельно от ZIP).

В исходном проекте остаётся прототип контактной формы без реальной отправки.

## Обновление: контактная секция и модальные окна

- Взята композиция **05 / START A CONVERSATION** из Edition 04: верхняя подпись и разделитель, крупный заголовок, отдельная правая колонка с текстом, нижние подписи. Вместо прямоугольной кнопки оставлена фирменная овальная кнопка WONDER.
- Оба попапа теперь React-управляемые и выводятся через `createPortal` поверх страницы: больше нет вызовов `HTMLDialogElement.showModal()`. Есть клавиша Escape, закрытие по фону, возврат фокуса и блокировка прокрутки.
- Форма по-прежнему **ничего не отправляет**, а копирует текст или предлагает ручное копирование.
- HTML-предпросмотр отдельно содержит полноценный браузерный JavaScript для открытия галереи и формы.
