<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Таблиці турів</title>
            </head>
            <body>
                <h2>Вихідна таблиця</h2>
                <table border="1">
                    <tr>
                        <th>Країна</th>
                        <th>Тип туру</th>
                        <th>Опис</th>
                        <th>Гарячий тур</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                    </tr>
                    <!-- Вихідні дані -->
                    <xsl:for-each select="tours/tour">
                        <tr>
                            <td><xsl:value-of select="country"/></td>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="hotTour"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="quantity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Відсортована таблиця (за ціною)</h2>
                <table border="1">
                    <tr>
                        <th>Країна</th>
                        <th>Тип туру</th>
                        <th>Опис</th>
                        <th>Гарячий тур</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                    </tr>
                    <!-- Сортуємо за ціною -->
                    <xsl:for-each select="tours/tour">
                        <xsl:sort select="price" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="country"/></td>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="hotTour"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="quantity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Відфільтрована таблиця (кількість > 10)</h2>
                <table border="1">
                    <tr>
                        <th>Країна</th>
                        <th>Тип туру</th>
                        <th>Опис</th>
                        <th>Гарячий тур</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                    </tr>
                    <!-- Фільтруємо де кількість більше 10 -->
                    <xsl:for-each select="tours/tour[quantity > 10]">
                        <tr>
                            <td><xsl:value-of select="country"/></td>
                            <td><xsl:value-of select="type"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="hotTour"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="quantity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
