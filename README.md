# JPYCv2-metatransaction
JPYCv2のメタトランザクションを体験する。

# how to start
```
git clone https://github.com/retocrooman/JPYCv2-metatransaction
git cd JPYCv2-metatransaction
npm i
```
.env.exampleを参考に.envファイルを作成し秘密鍵を記入してください。
# EIP2612を体験する
setting.jsを適当に変更してください。
EIP2612のnonceは連番になります。
```
npm run EIP2612
```
EIP2612.jsonにpermitの引数が出力されます。
# EIP3009を体験する
setting.jsを適当に変更してください。
EIP3009のnonceはランダムな32bytesになります。
```
npm run EIP3009
```
EIP3009.jsonにpermitの引数が出力されます。