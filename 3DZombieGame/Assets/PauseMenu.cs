using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PauseMenu : MonoBehaviour
{
    public static bool GameIsPaused = false;
    public GameObject PausemenuUI;


    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if(GameIsPaused)
            {
                resume();

            }
            else
            {
                Pause();
            }
        }
        
    }
    public void resume()
    {
        PausemenuUI.SetActive(false);
        Time.timeScale = 1f;
        GameIsPaused = false;

    }
    void Pause()
    {
        PausemenuUI.SetActive(true);
        Time.timeScale = 0f;
        GameIsPaused = true;
    }
    public void loadmenu()
    {
        Time.timeScale = 1f;
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
    }

    public void Quitgame()
    {
        Debug.Log("quitting game");
        Application.Quit();
    }

}
