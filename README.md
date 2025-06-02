
# 📈 Previsão de Preço de Ações com LSTM

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)](https://www.python.org/)
[![Keras](https://img.shields.io/badge/Keras-DeepLearning-red?logo=keras)](https://keras.io/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Este projeto usa redes neurais LSTM para prever o preço de fechamento de ações, utilizando a ação `BBAS3.SA` (Banco do Brasil) como exemplo. Os dados são obtidos via Yahoo Finance com a biblioteca `yfinance`.

---

## 🚀 Tecnologias Utilizadas

- 🐍 Python 3.8+
- 📦 yfinance
- 📊 pandas, numpy
- 📈 matplotlib
- 🧠 Keras + TensorFlow
- 🔧 scikit-learn

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/projeto-previsao-acoes.git
cd projeto-previsao-acoes
pip install -r requirements.txt
```

> Ou instale manualmente:
```bash
pip install yfinance pandas numpy matplotlib scikit-learn keras
```

---

## 📊 Funcionalidades

- Coleta de dados históricos da ação `BBAS3.SA`
- Visualização dos preços de abertura e fechamento
- Normalização dos dados (MinMaxScaler)
- Criação de sequências para séries temporais
- Treinamento de modelo LSTM para previsão
- Avaliação e visualização do desempenho
- Previsão futura com dados recentes

---

## 🧠 Modelo LSTM

- 2 Camadas LSTM com 50 neurônios cada
- 1 Camada Dense com 25 neurônios
- 1 Camada de saída (1 neurônio)
- Função de perda: Mean Squared Error (MSE)
- Otimizador: Adam

---

## 📈 Gráficos Gerados

- Preço de abertura e fechamento históricos
- Comparação entre valores reais e previstos
- Linha de média dos valores reais

---

## 📌 Exemplo de Uso

```python
acao_exemplo = "BBAS3.SA"
previsao = obter_cotacoes_e_prever(acao_exemplo, escalar, modelo)
print(previsao)
```

---

## ⚠️ Observações

- O script contém algumas variáveis inconsistentes (ex: `cotacao` vs `cota`, `dados_entre_0_e_1`, `treinamento`, `df_teste`) que devem ser corrigidas para funcionamento completo.
- Recomenda-se refatorar em funções e módulos.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---
