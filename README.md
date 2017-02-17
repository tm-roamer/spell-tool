
#### 这是一个内部国际化拼写检查的小工具

#### 运行

    npm start
    npm start en
    npm start fr
    npm start de
    或者
    node index.js 
    node index.js en
    node index.js fr
    node index.js de
    
    这些后缀 en | fr | de 哪里来的, 是通过config.js里面配置的, 
    比如我要加 俄语 = ru, 就在 config.js 里面 加一个 ru:{} 对象即可
    
#### 使用说明

    工具有点笨和傻, 目前的代码只能支持拼写检查i18n.json的国际化资源文件
    
    index.js  是主文件, options是配置国际化文件目录的
    config.js 是配置对应语言的一些定制设置(匹配文件名的正则, 忽略的单词数组等)
    
#### 底层说明

        本小工具, 底层使用node-spellchecker进行拼写检查, 
    它的github地址: https://github.com/atom/node-spellchecker
        
        本小工具, 底层使用的字典基于hunspell
     字典的资源github地址: https://github.com/LibreOffice/dictionaries.git
     字典在线地址:  http://cgit.freedesktop.org/libreoffice/dictionaries/tree/
     补充: 字典文件的组成:    [语言缩写].aff 和 [语言缩写].dic 2个文件组成, 下载就能用.  
    
#### 支持哪些语言
    
    这个是字典库提供的功能, 
    可以查看火狐的语言包来查看: https://addons.mozilla.org/en-us/firefox/language-tools/
    国家缩写: https://zhidao.baidu.com/question/43709936.html
    想补充语言: https://github.com/LibreOffice/dictionaries.git 下载去
               补充: 字典文件的组成:    [语言缩写].aff 和 [语言缩写].dic 2个文件组成,  下载这2个文件就行了

#### 相关网址

    插件
    https://github.com/atom/node-spellchecker
    https://github.com/hunspell/hunspell
    http://hunspell.github.io/
    https://addons.mozilla.org/en-us/firefox/language-tools/
    字典库
    http://cgit.freedesktop.org/libreoffice/dictionaries/tree/
    https://github.com/LibreOffice/dictionaries.git
    
#### 协议
    MIT