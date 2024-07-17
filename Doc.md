Documentation on the App and Code

App



Code

Customize Menu:

```
const { menuItems, selectedKey } = useMenu();

  const renderMenuItems = (items: ITreeMenu[]) => {
    return (
      <div className={styles.siderMenu}>
        {items.map(({ key, name, label, icon, route }) => {
          const isSelected = key === selectedKey;
          return (
            <li key={name}>
              <Link
                href={route}
                style={{
                  fontWeight: isSelected ? "bold" : "normal",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
                <span>{label ?? name}</span>
              </Link>
            </li>
          );
        })}
      </div>
    );
  };

render={() => (
      <div className="menu">
        <ul>{renderMenuItems(menuItems)}</ul>
      </div>
    )}

```
