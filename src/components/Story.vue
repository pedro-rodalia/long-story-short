<template>
  <div ref="container" class="story">
    <input
      ref="title"
      v-model="title_"
      class="story__title"
      placeholder="Título"
      :readonly="!editable"
      @input="update"
    />
    <div ref="content" class="story__content">
      <div class="editor">
        <editor-menu-bubble v-if="editable" v-slot="{ menu }" :editor="editor" :keep-in-bounds="keepInBounds">
          <tools bubble :editor="editor" :menu="menu" />
        </editor-menu-bubble>
        <editor-content class="editor__content" :editor="editor" />
      </div>
    </div>
    <toolbar v-if="editable" :editor="editor" @publish="save(true)" @save="save" />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Tools from '@/components/Tools'
import { mapMutations, mapActions } from 'vuex'
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
    Toolbar,
    Tools,
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
    id: {
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
          new History(),
          new Underline(),
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
  watch: {
    title() {
      this.init()
    },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    ...mapMutations(['updateStory']),
    ...mapActions(['publish', 'save', 'getStory']),
    async init() {
      this.$refs.content.style.marginTop = `${this.$refs.title.clientHeight}px`
      this.$refs.container.addEventListener('scroll', this.setTitleFontSize)
      if (this.id) {
        const { title, text } = await this.getStory(this.id)
        this.title_ = title
        this.content_ = text
      } else {
        this.title_ = ''
        this.content_ = ''
      }
      this.editor.setOptions({ editable: this.editable })
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
