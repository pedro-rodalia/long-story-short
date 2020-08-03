<template>
  <div class="story" ref="container">
    <input
      class="story__title"
      ref="title"
      v-model="title_"
      placeholder="Título"
      :readonly="!editable"
      @input="update"
    />
    <div class="story__content" ref="content">
      <div class="editor">
        <editor-menu-bubble
          :editor="editor"
          :keep-in-bounds="keepInBounds"
          v-slot="{ commands, isActive, menu }"
          v-if="editable"
        >
          <div
            class="menububble"
            :class="{ 'is-active': menu.isActive }"
            :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
          >
            <button class="menububble__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
              <span class="icon--bold">B</span>
            </button>
            <button class="menububble__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
              <span class="icon--strike">S</span>
            </button>
            <button
              class="menububble__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >
              <span class="icon--underline">U</span>
            </button>
            <button
              class="menububble__button"
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
            >
              <span class="icon--paragraph">ℙ</span>
            </button>
            <button
              v-for="(heading, idx) in headings"
              class="menububble__button"
              :key="idx"
              :class="{ 'is-active': isActive.heading({ level: heading }) }"
              @click="commands.heading({ level: heading })"
            >
              <span class="icon--heading">H{{ heading }}</span>
            </button>
            <button class="menububble__button" @click="commands.horizontal_rule">
              <span class="icon--rh">Separador</span>
            </button>
          </div>
        </editor-menu-bubble>
        <editor-content class="editor__content" :editor="editor" />
      </div>
    </div>
  </div>
</template>

<script>
import FullStory from '@/../__mocks__/full-story'
import { mapMutations } from 'vuex'
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  HardBreak,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  HorizontalRule,
  History,
  Placeholder,
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBubble,
  },
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      keepInBounds: true,
      title_: '',
      content_: '',
      editor: new Editor({
        extensions: [
          new HardBreak(),
          new Heading({ levels: [2, 3] }),
          new Bold(),
          new HorizontalRule(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Contenido...',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
          }),
        ],
        content: '',
        onUpdate: ({ getHTML }) => this.sync(getHTML()),
      }),
    }
  },
  computed: {
    headings() {
      return this.editor.extensions.extensions.find(({ name }) => name === 'heading').options.levels
    },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  watch: {
    title() {
      this.init()
    },
  },
  methods: {
    ...mapMutations(['updateStory']),
    async init() {
      this.$refs.content.style.marginTop = `${this.$refs.title.clientHeight}px`
      this.$refs.container.addEventListener('scroll', this.setTitleFontSize)
      this.editor.setOptions({ editable: this.editable })
      if (this.title) {
        const { title, content } = await new Promise((resolve) =>
          resolve({ title: 'A la luz del sol', content: FullStory })
        )
        this.title_ = title
        this.content_ = content
      } else {
        this.title_ = ''
        this.content_ = ''
      }
      this.editor.setContent(this.content_)
    },
    sync(content) {
      this.content_ = content
      this.update()
    },
    update() {
      this.updateStory({ title: this.title_, content: this.content_ })
    },
    setTitleFontSize() {
      const scrollDistance = this.$refs.container.scrollTop
      this.$refs.title.style.fontSize = scrollDistance > 64 ? '32px' : '60px'
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  color: $--white;
  &--bold {
    font-weight: $--font-bold;
  }
  &--italic {
    font-weight: $--font-bold;
    font-style: italic;
  }
  &--underline {
    font-weight: $--font-bold;
    text-decoration: underline;
  }
  &--strike {
    font-weight: $--font-bold;
    text-decoration: line-through;
  }
  &--heading {
    font-weight: $--font-bold;
  }
}

.story {
  flex: 1;
  height: 100%;
  overflow: scroll;
  padding: 0;
  position: relative;
  &__title {
    &::placeholder {
      opacity: 0.4;
    }
    @extend %font-serif;
    background-color: transparent;
    color: $--black;
    appearance: none;
    border: none;
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0;
    font-size: $--text-6xl;
    font-weight: $--font-regular;
    padding: $--spacing-200 $--spacing-600 $--spacing-300;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0));
    transition: font-size 0.5s;
  }
  &__content {
    text-align: justify;
    padding: 0 $--spacing-600 $--spacing-600;
    text-indent: $--spacing-200;
    font-size: $--text-xl;
    line-height: $--text-3xl;
    font-weight: $--font-light;
  }
}
</style>
