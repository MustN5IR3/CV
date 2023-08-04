using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class youWIN : MonoBehaviour
{
    void OnTriggerEnter()
    {
        manageWIN.instance.win();
    }

}
