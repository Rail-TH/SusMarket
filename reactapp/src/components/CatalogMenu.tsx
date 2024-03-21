import React from "react";

interface CatalogMenuProps {
    toggleCatalogMenu: () => void;
}

export default function CatalogMenu({ toggleCatalogMenu }: CatalogMenuProps): JSX.Element {
    return(
        <>
            <div className="background-blackout" onClick={toggleCatalogMenu}></div>
            <ul className="catalog-menu">
                <li className="catalog-menu__point-li">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8 40C12.3 40 10.975 39.4417 9.825 38.325C8.675 37.2083 8.05 35.85 7.95 34.25C6.71667 33.4833 5.75833 32.5095 5.075 31.3284C4.39167 30.1473 4.05 28.8545 4.05 27.45C4.05 25.7167 4.55833 24.1583 5.575 22.775C6.59167 21.3917 7.93333 20.5167 9.6 20.15L5.55 15.9L4.6 16.9C4.3 17.2333 3.94167 17.4 3.525 17.4C3.10833 17.4 2.75 17.2417 2.45 16.925C2.15 16.6083 2 16.25 2 15.85C2 15.45 2.15 15.0833 2.45 14.75L6.5 10.55C6.8 10.25 7.15833 10.1 7.575 10.1C7.99167 10.1 8.35 10.2583 8.65 10.575C8.95 10.8917 9.1 11.25 9.1 11.65C9.1 12.05 8.95 12.4 8.65 12.7L7.7 13.75L11.3 17.6L13.25 11.75C13.6167 10.65 14.2581 9.75 15.1742 9.05C16.0904 8.35 17.1157 8 18.25 8H29.85C30.9971 8 32.0338 8.35 32.9603 9.05C33.8868 9.75 34.5167 10.65 34.85 11.75L37.35 20.05C39.25 20.2167 40.8333 20.9917 42.1 22.375C43.3667 23.7583 44 25.45 44 27.45C44 28.8545 43.6583 30.1473 42.975 31.3284C42.2917 32.5095 41.3333 33.4833 40.1 34.25C40 35.85 39.375 37.2083 38.225 38.325C37.075 39.4417 35.75 40 34.25 40C32.85 40 31.625 39.5167 30.575 38.55C29.525 37.5833 28.8667 36.4 28.6 35H19.45C19.1833 36.4 18.525 37.5833 17.475 38.55C16.425 39.5167 15.2 40 13.8 40ZM13.7 19.95H22.45V11H18.25C17.7641 11 17.3343 11.1583 16.9606 11.475C16.5869 11.7917 16.3167 12.1833 16.15 12.65L13.7 19.95ZM25.45 19.95H34.2L31.9551 12.6672C31.785 12.1891 31.5131 11.7917 31.1394 11.475C30.7657 11.1583 30.3359 11 29.85 11H25.45V19.95ZM19.45 32H28.6C28.9667 30.8 29.6833 29.8333 30.75 29.1C31.8167 28.3667 32.9833 28 34.25 28C35.3167 28 36.3 28.2833 37.2 28.85C38.1 29.4167 38.8333 30.15 39.4 31.05C39.9667 30.6167 40.375 30.0762 40.625 29.4286C40.875 28.7811 41 28.1215 41 27.45C41 26.1833 40.5667 25.1167 39.7 24.25C38.8333 23.3833 37.7667 22.95 36.5 22.95H11.55C10.2833 22.95 9.21667 23.3833 8.35 24.25C7.48333 25.1167 7.05 26.1833 7.05 27.45C7.05 28.1215 7.18333 28.7811 7.45 29.4286C7.71667 30.0762 8.11667 30.6167 8.65 31.05C9.18333 30.0833 9.90975 29.3333 10.8293 28.8C11.7488 28.2667 12.739 28 13.8 28C15.0667 28 16.2333 28.3667 17.3 29.1C18.3667 29.8333 19.0833 30.8 19.45 32ZM13.8 37C14.65 37 15.3625 36.7125 15.9375 36.1375C16.5125 35.5625 16.8 34.85 16.8 34C16.8 33.15 16.5125 32.4375 15.9375 31.8625C15.3625 31.2875 14.65 31 13.8 31C12.95 31 12.2375 31.2875 11.6625 31.8625C11.0875 32.4375 10.8 33.15 10.8 34C10.8 34.85 11.0875 35.5625 11.6625 36.1375C12.2375 36.7125 12.95 37 13.8 37ZM34.25 37C35.1 37 35.8125 36.7125 36.3875 36.1375C36.9625 35.5625 37.25 34.85 37.25 34C37.25 33.15 36.9625 32.4375 36.3875 31.8625C35.8125 31.2875 35.1 31 34.25 31C33.4 31 32.6875 31.2875 32.1125 31.8625C31.5375 32.4375 31.25 33.15 31.25 34C31.25 34.85 31.5375 35.5625 32.1125 36.1375C32.6875 36.7125 33.4 37 34.25 37Z" fill="#EB5E28"/>
                    </svg>
                    Игрушки
                </li>
                <li className="catalog-menu__point-li">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 19.8L9.35004 21.55C8.88337 21.8167 8.39171 21.8917 7.87504 21.775C7.35837 21.6583 7.00004 21.3833 6.80004 20.95L3.35004 15C3.08337 14.5333 3.00837 14.1333 3.12504 13.8C3.2417 13.4667 3.5167 13.1667 3.95004 12.9L15.35 6.25H18.55C18.9167 6.25 19.2084 6.35833 19.425 6.575C19.6417 6.79167 19.75 7.08333 19.75 7.45V8.2C19.75 9.46667 20.15 10.5 20.95 11.3C21.75 12.1 22.7834 12.5 24.05 12.5C25.3167 12.5 26.3417 12.1 27.125 11.3C27.9084 10.5 28.3 9.46667 28.3 8.2V7.45C28.3 7.08333 28.4084 6.79167 28.625 6.575C28.8417 6.35833 29.1334 6.25 29.5 6.25H32.7L44.1 12.9C44.5334 13.1667 44.8 13.4667 44.9 13.8C45 14.1333 44.9334 14.5333 44.7 15L41.2 20.95C41 21.3833 40.5834 21.6667 39.95 21.8C39.3167 21.9333 38.8167 21.8833 38.45 21.65L35.35 19.7V40.3C35.35 40.8333 35.15 41.2917 34.75 41.675C34.35 42.0583 33.8834 42.25 33.35 42.25H14.45C13.9167 42.25 13.4584 42.0583 13.075 41.675C12.6917 41.2917 12.5 40.8333 12.5 40.3V19.8ZM15.5 14.7V39.25H32.35V14.7L39.25 18.55L41.5 14.65L32.15 9.3H31.25C30.9834 11.1 30.1917 12.5833 28.875 13.75C27.5584 14.9167 25.95 15.5 24.05 15.5C22.15 15.5 20.5334 14.9167 19.2 13.75C17.8667 12.5833 17.0667 11.1 16.8 9.3H15.9L6.55004 14.65L8.80004 18.55L15.5 14.7Z" fill="#EB5E28"/>
                    </svg>
                    Мерч
                </li>
                <li className="catalog-menu__point-li">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.35 29.7C5.85 29.7 4.58333 29.1799 3.55 28.1396C2.51667 27.0993 2 25.8361 2 24.35C2 22.8639 2.52013 21.6007 3.5604 20.5604C4.6007 19.5201 5.8639 19 7.35 19V12.85C7.35 12.05 7.65 11.35 8.25 10.75C8.85 10.15 9.55 9.85 10.35 9.85H18.65C18.65 8.35 19.1701 7.08333 20.2104 6.05C21.2507 5.01667 22.5139 4.5 24 4.5C25.4861 4.5 26.7493 5.02013 27.7896 6.0604C28.8299 7.1007 29.35 8.3639 29.35 9.85H37.65C38.45 9.85 39.15 10.15 39.75 10.75C40.35 11.35 40.65 12.05 40.65 12.85V19C42.15 19 43.4167 19.5201 44.45 20.5604C45.4833 21.6007 46 22.8639 46 24.35C46 25.8361 45.4799 27.0993 44.4396 28.1396C43.3993 29.1799 42.1361 29.7 40.65 29.7V39.5C40.65 40.3 40.35 41 39.75 41.6C39.15 42.2 38.45 42.5 37.65 42.5H10.35C9.55 42.5 8.85 42.2 8.25 41.6C7.65 41 7.35 40.3 7.35 39.5V29.7ZM17.1617 24.7C17.7206 24.7 18.1917 24.5044 18.575 24.1133C18.9583 23.7221 19.15 23.2471 19.15 22.6883C19.15 22.1294 18.9544 21.6583 18.5633 21.275C18.1721 20.8917 17.6971 20.7 17.1383 20.7C16.5794 20.7 16.1083 20.8956 15.725 21.2867C15.3417 21.6779 15.15 22.153 15.15 22.7118C15.15 23.2706 15.3456 23.7417 15.7367 24.125C16.1279 24.5083 16.6029 24.7 17.1617 24.7ZM30.8617 24.7C31.4206 24.7 31.8917 24.5044 32.275 24.1133C32.6583 23.7221 32.85 23.2471 32.85 22.6883C32.85 22.1294 32.6544 21.6583 32.2633 21.275C31.8721 20.8917 31.3971 20.7 30.8383 20.7C30.2794 20.7 29.8083 20.8956 29.425 21.2867C29.0417 21.6779 28.85 22.153 28.85 22.7118C28.85 23.2706 29.0456 23.7417 29.4368 24.125C29.8279 24.5083 30.3029 24.7 30.8617 24.7ZM17.1 34.25H30.9C31.325 34.25 31.6812 34.1054 31.9688 33.8163C32.2563 33.5271 32.4 33.1687 32.4 32.7413C32.4 32.3138 32.2563 31.9583 31.9688 31.675C31.6812 31.3917 31.325 31.25 30.9 31.25H17.1C16.675 31.25 16.3188 31.3946 16.0312 31.6838C15.7438 31.9729 15.6 32.3313 15.6 32.7587C15.6 33.1863 15.7438 33.5417 16.0312 33.825C16.3188 34.1083 16.675 34.25 17.1 34.25ZM10.35 39.5H37.65V12.85H10.35V39.5Z" fill="#EB5E28"/>
                    </svg>
                    Фигурки
                </li>
                <li className="catalog-menu__point-li">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 6.75C27.2334 6.75 30.35 7.28333 33.35 8.35C36.35 9.41667 39.1334 10.9 41.7001 12.8C42.1 13.1 42.4084 13.4659 42.625 13.8976C42.8417 14.3294 42.9501 14.7738 42.9501 15.231C42.9501 15.5103 42.9084 15.7909 42.8251 16.0728C42.7417 16.3547 42.6167 16.6304 42.4501 16.9L26.5 40.95C26.2 41.4 25.825 41.7375 25.375 41.9625C24.925 42.1875 24.4647 42.3 23.9939 42.3C23.5232 42.3 23.0649 42.1917 22.6189 41.975C22.173 41.7583 21.8 41.4167 21.5 40.95L5.55005 16.9C5.37055 16.625 5.24235 16.35 5.16545 16.075C5.08852 15.8 5.05005 15.525 5.05005 15.25C5.05005 14.7885 5.15838 14.3398 5.37505 13.9039C5.59172 13.468 5.90005 13.1 6.30005 12.8C8.86672 10.9 11.65 9.41667 14.65 8.35C17.65 7.28333 20.7667 6.75 24 6.75ZM24 9.75C20.9334 9.75 18.1334 10.275 15.6 11.325C13.0667 12.375 10.5167 13.6667 7.95005 15.2L24 39.4L40.05 15.2C37.4834 13.6667 34.9326 12.375 32.3978 11.325C29.863 10.275 27.0637 9.75 24 9.75ZM18.503 20.5C19.2677 20.5 19.9167 20.2323 20.45 19.697C20.9834 19.1617 21.25 18.5117 21.25 17.747C21.25 16.9823 20.9824 16.3333 20.4471 15.8C19.9118 15.2667 19.2618 15 18.4971 15C17.7324 15 17.0834 15.2677 16.55 15.803C16.0167 16.3383 15.75 16.9883 15.75 17.753C15.75 18.5177 16.0177 19.1667 16.553 19.7C17.0883 20.2333 17.7383 20.5 18.503 20.5ZM24.003 31.25C24.7677 31.25 25.4167 30.9824 25.95 30.4471C26.4834 29.9118 26.75 29.2618 26.75 28.4971C26.75 27.7324 26.4824 27.0833 25.9471 26.55C25.4118 26.0167 24.7618 25.75 23.9971 25.75C23.2324 25.75 22.5834 26.0177 22.05 26.5529C21.5167 27.0882 21.25 27.7383 21.25 28.503C21.25 29.2677 21.5177 29.9167 22.053 30.45C22.5883 30.9833 23.2383 31.25 24.003 31.25Z" fill="#EB5E28"/>
                    </svg>
                    Вкусняшки
                </li>
                <li className="catalog-menu__point-li">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4 33C14.1855 33 15.9236 33.2083 17.6142 33.625C19.3047 34.0417 20.9667 34.6667 22.6 35.5V14.15C21.1 13.15 19.473 12.375 17.7191 11.825C15.9651 11.275 14.1921 11 12.4 11C11.1333 11 9.89167 11.1583 8.675 11.475C7.45833 11.7917 6.23333 12.1833 5 12.65V34.35C6.03333 33.8833 7.20833 33.5417 8.525 33.325C9.84167 33.1083 11.1333 33 12.4 33ZM25.6 35.5C27.2667 34.6667 28.9 34.0417 30.5 33.625C32.1 33.2083 33.8 33 35.6 33C36.8667 33 38.175 33.1 39.525 33.3C40.875 33.5 42.0333 33.7667 43 34.1V12.65C41.8667 12.0833 40.6696 11.6667 39.4089 11.4C38.1481 11.1333 36.8785 11 35.6 11C33.8 11 32.0583 11.275 30.375 11.825C28.6917 12.375 27.1 13.15 25.6 14.15V35.5ZM24.1 39.45C23.8487 39.45 23.6109 39.425 23.3865 39.375C23.1622 39.325 22.9667 39.2333 22.8 39.1C21.2333 38.1333 19.5692 37.3833 17.8077 36.85C16.0461 36.3167 14.2435 36.05 12.4 36.05C11.1821 36.05 9.98597 36.2 8.8116 36.5C7.6372 36.8 6.46667 37.1667 5.3 37.6C4.53 37.9667 3.7875 37.9167 3.0725 37.45C2.3575 36.9833 2 36.3167 2 35.45V12.3C2 11.8 2.11667 11.3417 2.35 10.925C2.58333 10.5083 2.93333 10.1833 3.4 9.95C4.8 9.28333 6.25658 8.79167 7.76975 8.475C9.28288 8.15833 10.8263 8 12.4 8C14.5 8 16.5417 8.28333 18.525 8.85C20.5083 9.41667 22.3667 10.2833 24.1 11.45C25.8 10.2833 27.625 9.41667 29.575 8.85C31.525 8.28333 33.5333 8 35.6 8C37.1623 8 38.6945 8.15833 40.1967 8.475C41.6989 8.79167 43.15 9.28333 44.55 9.95C45.0167 10.1833 45.375 10.5083 45.625 10.925C45.875 11.3417 46 11.8 46 12.3V35.45C46 36.3798 45.625 37.0873 44.875 37.5724C44.125 38.0575 43.3833 38.0667 42.65 37.6C41.5167 37.1333 40.3628 36.7583 39.1884 36.475C38.014 36.1917 36.8179 36.05 35.6 36.05C33.7908 36.05 32.0219 36.3167 30.2931 36.85C28.5644 37.3833 26.9333 38.1333 25.4 39.1C25.2333 39.2333 25.0378 39.325 24.8135 39.375C24.5891 39.425 24.3513 39.45 24.1 39.45ZM28 17.6C28 17.4161 28.0671 17.2272 28.2012 17.0331C28.3353 16.839 28.4849 16.7113 28.65 16.65C29.65 16.2833 30.6723 16 31.7168 15.8C32.7613 15.6 33.8598 15.5 35.0124 15.5C35.7328 15.5 36.4441 15.5417 37.1465 15.625C37.8488 15.7083 38.5333 15.8333 39.2 16C39.4 16.0667 39.5833 16.1899 39.75 16.3698C39.9167 16.5496 40 16.7519 40 16.9767C40 17.3589 39.875 17.65 39.625 17.85C39.375 18.05 39.0667 18.1 38.7 18C38.14 17.8333 37.55 17.7083 36.93 17.625C36.31 17.5417 35.6667 17.5 35 17.5C34.0333 17.5 33.1 17.5917 32.2 17.775C31.3 17.9583 30.4167 18.2333 29.55 18.6C29.0833 18.7667 28.7083 18.7583 28.425 18.575C28.1417 18.3917 28 18.0667 28 17.6ZM28 28.6C28 28.4065 28.0671 28.2076 28.2012 28.0033C28.3353 27.7989 28.4849 27.6645 28.65 27.6C29.65 27.2333 30.6723 26.9583 31.7168 26.775C32.7613 26.5917 33.8598 26.5 35.0124 26.5C35.7328 26.5 36.4441 26.5417 37.1465 26.625C37.8488 26.7083 38.5333 26.8333 39.2 27C39.4 27.0667 39.5833 27.1899 39.75 27.3697C39.9167 27.5496 40 27.752 40 27.9768C40 28.3589 39.875 28.65 39.625 28.85C39.375 29.05 39.0667 29.1 38.7 29C38.14 28.8333 37.55 28.7083 36.93 28.625C36.31 28.5417 35.6667 28.5 35 28.5C34.0333 28.5 33.1 28.5833 32.2 28.75C31.3 28.9167 30.4167 29.1833 29.55 29.55C29.0833 29.7167 28.7083 29.7167 28.425 29.55C28.1417 29.3833 28 29.0667 28 28.6ZM28 23.1C28 22.9161 28.0671 22.7272 28.2012 22.5331C28.3353 22.339 28.4849 22.2113 28.65 22.15C29.65 21.7833 30.6723 21.5 31.7168 21.3C32.7613 21.1 33.8598 21 35.0124 21C35.7328 21 36.4441 21.0417 37.1465 21.125C37.8488 21.2083 38.5333 21.3333 39.2 21.5C39.4 21.5667 39.5833 21.6899 39.75 21.8698C39.9167 22.0496 40 22.252 40 22.4768C40 22.8589 39.875 23.15 39.625 23.35C39.375 23.55 39.0667 23.6 38.7 23.5C38.14 23.3333 37.55 23.2083 36.93 23.125C36.31 23.0417 35.6667 23 35 23C34.0333 23 33.1 23.0917 32.2 23.275C31.3 23.4583 30.4167 23.7333 29.55 24.1C29.0833 24.2667 28.7083 24.2583 28.425 24.075C28.1417 23.8917 28 23.5667 28 23.1Z" fill="#EB5E28"/>
                    </svg>
                    Книги
                </li>
            </ul>
        </>
    )
}