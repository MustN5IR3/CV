using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class pauseIT : MonoBehaviour
{
    public bool gamePaused = false;
    public GameObject pauseMenu;
    void Update()
    {

        if (Input.GetButtonDown("Cancel"))
        {
            if (gamePaused == false)
            {
                Time.timeScale = 0;
                gamePaused = true;
                Cursor.visible = true;
                pauseMenu.SetActive(true);
            }
            else
            {
                pauseMenu.SetActive(false);
                Cursor.visible = false;
                gamePaused = false;
                Time.timeScale = 1;
            }
        }
    }

    public void UnpausedGame()
    {
        pauseMenu.SetActive(false);
        Cursor.visible = false;
        gamePaused = false;
        Time.timeScale = 1;
    }


}
